
class PersonClass {
   constructor(name, email) {
      this._Name = name
      this._Email = email
   }

   LogPerson() {
      console.log(this._Name, this._Email)
   }

   GetName() {
      return this._Name
   }

   SetName(name) {
      this._Name = name
   }
}

