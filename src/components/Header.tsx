import { ColorModeSwitcher } from "../ColorModeSwitcher"
export const Header: React.FC=()=>{
    return(
        <div>
            <h1>Trackr</h1>
        <ColorModeSwitcher justifySelf="flex-end" />

        </div>
        
    )
}