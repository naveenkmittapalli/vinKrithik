@RestResource (urlMapping = '/v1/BookManager/')
global class RestBookSrvc {
    
    @HttpGet
    global static book__c getBook() {
        book__c book = new book__c ();
        Map <string, string> paramsMap = RestContext.request.params;
        string BookId = paramsMap.get('Id');
        book = [select Id, Book_Name__c, Book_Subject__c from book__c where Id =: BookId];
        return book;       
    }
    
    @HttpDelete
    global static string deleteBook() {
        book__c book = new book__c ();
        Map <string, string> paramsMap = RestContext.request.params;
        string BookId = paramsMap.get('Id');
        book = [select Id, Name from book__c where Id =: BookId];
        delete book;
        return 'Book Deleted';       
    }
    
    @Httpput
    global static string updateBook(string BookName, string BookSubject) {
        book__c book = new book__c ();
        Map <string, string> paramsMap = RestContext.request.params;
        string BookId = paramsMap.get('Id');
        if(BookId != '') {
        	book = [select Id, Name from book__c where Id =: BookId];
        	book.Book_Name__c = BookName;
        	book.Book_Subject__c = BookSubject;
        	update book;
        	return 'Book Updated';  
        }
        else
        {
            return 'Book Not Found';
        }
    }
    
    @Httppost
    global static string insertBook(string BookName, string BookSubject) {
        book__c book = new book__c ();
        book.Book_Name__c = BookName;
        book.Book_Subject__c = BookSubject;
        insert book;
        return 'Book Inserted';       
    }
    
    @Httppatch
    global static string upsertBook(string BookName, string BookSubject) {
        book__c book = new book__c ();
        Map <string, string> paramsMap = RestContext.request.params;
        string BookId = paramsMap.get('Id');
        if(BookId != ''){
           book = [select Id, Name from book__c where Id =: BookId]; 
        }
        
        book.Book_Name__c = BookName;
        book.Book_Subject__c = BookSubject;
        update book;        
        return 'Book Upserted';       
    }

    
    
    

}