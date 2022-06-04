import { ReactNode } from "react";
import { IContent } from "../Interfaces/IText";

function Menu(props: { content: Array<IContent> }) {
    console.log('hi')
    return (
        <>
            {props.content.map(col =>
                <div>
                    {col.COL1.LABEL ? <h1>{col.COL1.LABEL}</h1> : ''}
                    {
                        col.COL1.ITEMS && col.COL1.ITEMS?.length > 0 ?
                            <ul>
                                {col.COL1.ITEMS.map((item) =>
                                    <div>
                                        <span>{item.TITLE}</span>
                                        <span>{item.PRICE as ReactNode}</span>
                                    </div>
                                )}
                            </ul>
                            : ''
                    }
                </div>
            )}
        </>
    );
}

export default Menu;