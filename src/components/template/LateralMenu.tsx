import MenuItem from "./MenuItem";
import {UserIcon} from "../Icons"
import {ProfileIcon} from "../Icons"
import {NewsIcon} from "../Icons"
import {CategoryIcon} from "../Icons"
import { ExitIcon } from "../Icons";
import { HelppIcon } from "../Icons";

export default function LateralMenu() {
    return (

        <aside className={`
        
        flex flex-col
        bg-blue-700 text-white
        
        `}>
            <ul className="flex-grow"> 

            <MenuItem url="/users" text="Usuários" icon={UserIcon}/>
            <MenuItem url="/profiles" text="Perfis" icon={ProfileIcon}/>
            <MenuItem url="/news" text="Notícias" icon={NewsIcon}/>
            <MenuItem url="/categories" text="Categorias" icon={CategoryIcon}/>
            <MenuItem url="/help" text="Ajuda" icon={HelppIcon}/>
            

            </ul>
            <ul>
            <MenuItem 
            text="Sair" 
            icon={ExitIcon}
            onClick = {()=> console.log('Logout')}
            className={`
            text-white
            hover:bg-red-400
            hover:text-red-200
            
            `}
            

            />
            </ul>
        </aside>

    );
}