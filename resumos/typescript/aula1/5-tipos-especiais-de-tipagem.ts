// Generics
function forEach<T>(array: Array<T>, f: (element: T, index: number) => void) : void { 
    let i = 0;
    for (let e of array) {
      f(e, i); 
      i++;
    }
  }


// Utilities
interface CompanyUser {
    mobilePhone: string;
    name: string;
    email: string;
    password: string;
    urlProfilePicture: string;
    profilePictureStoragePath: string;
    language: string;
}

//Partial 
function updateCompanyUser(companyUser: CompanyUser, 
    fieldsToUpdate: Partial<CompanyUser>){
        console.log({...companyUser, ...fieldsToUpdate})
    }


const user = {
    mobilePhone: 'teste',
    name: 'teste',
    email: 'teste',
    password: 'teste',
    urlProfilePicture: 'teste',
    profilePictureStoragePath: 'teste',
    language: 'teste',
};

const updatedFields = {
    mobilePhone: 'ALTERADO',
    name: 'ALTERADO',
}

updateCompanyUser(user, updatedFields);

//Pick 
type CompanyUserProfile = Pick<CompanyUser, "name" | "email">
const rafa: CompanyUserProfile = {
    name: 'Rafael', 
    email: "rafael@ghnossi.com",
};


//Record - cria um tipo de objeto
//{gupy: ['admission', 'community]}
type CompaniesPerFlag = Record<string, Array<string>>;

interface PageInfo {
    title: string;
  }
  
type Page = "home" | "about" | "contact";

const nav: Record<Page, PageInfo> = {
about: { title: "about" },
contact: { title: "contact" },
home: { title: "home" },
};

