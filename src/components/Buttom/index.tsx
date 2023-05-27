import './styles.css'

type Props = {
    text: string;
}
const Buttom = ({text}: Props) => {
    return (
        <div className="btn">
            <button type="submit" className="btn btn-primary">
                <h6>{text}</h6>
            </button>
        </div>
    )
}

export default Buttom;