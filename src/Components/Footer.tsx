import { Info } from "../User";

const Footer = () => {
    return <div className="mx-36 mt-20 mb-10 font-mono">
            <div className="text-3xl text-primaryColor font-semibold flex  flex-col gap-2 items-center">{Info.name}</div>
            <div className="text-center text-textColor text-xl">Copyright &copy;{new Date().getFullYear()} {Info.name} | All Rights Reserved </div>
        </div>
   
}
export default Footer;