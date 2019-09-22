public class ParkLocator {
    public static list <String> country(string countryName) {
    ParkService.ParksImplPort  parkser = new ParkService.ParksImplPort ();
        return parkser.byCountry (countryName);
    }

}