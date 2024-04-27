
//? pour rendre les champs non obligatoires

export interface Menu {
    id?:string;
    titre?:string;
    icon?:string;
    url?: string;
    sousMenu?:Array<Menu>; 
}