class Students {

    private lName:string;
    private fName:string;

    constructor(lname:string, fname:string) {
        this.fName = fname;
        this.lName = lname;
    }

    GetFullname():string 
    {
        return this.lName+ ", " + this.fName;
    }

}
export default Students ;