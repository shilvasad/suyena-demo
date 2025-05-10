import HeaderLayout from "./header/HeaderLayout";
import NavLayout from "./nav/NavLayout";
import FooterLayout from "./footer/FooterLayout";

export default function Layout({children}){
    return(
        <>
        <HeaderLayout/>
        <NavLayout/>

        <main>
            {children}
        </main>

        <FooterLayout/>
        
        </>
    )
}