import CheckboxAddProject from "./chekbox_add_project";

export default function Choosestuffadporject ({NameStuffAddProject,PositionStuffAddProject}){
    return(
        <>
        <div className="bacground_ofstf background_shadowdd">
            <div className="infstuff">
                <div className="inftitleddddd">
                    <p className="titlechjtf">{NameStuffAddProject}</p>
                    <p className="titlechjtfffff">{PositionStuffAddProject}</p>
                </div>
                <CheckboxAddProject/>
            </div>
        </div>
        </>
    )
}