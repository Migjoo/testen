export class Buchungen {


constructor(
    public tag: string = new Date().toLocaleDateString(), 
    public nameAktion: string = "Planwagenfahrt", 
    public personen: number = 321, 
    public Max: number = 32, 
    public Rest: number = 32, 
    public Web: number = 5, 
    public JS: number = 5, 
    public MD: number = 10, 
    public Vermerk: string = "placeholder"){

}


}


