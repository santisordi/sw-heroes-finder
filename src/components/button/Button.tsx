import './Button.css'

interface Props {
    label: string,
    parentMethod: ()=> void
}

export function Button ({label, parentMethod}: Props){
    return(
        <button className="custom-button" onClick={parentMethod}>
            {label}
        </button>
    )
}