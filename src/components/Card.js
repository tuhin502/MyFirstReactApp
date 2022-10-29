// const todoTitle= "Call Family";
// const tododesc = "lorem ipsum for my family in Bangladesh lorem ipsum for my family in Bangladesh"
const date = new Date();
const dateName = date.getDate();
const  monthName = date.getMonth();
const currentYear = date.getFullYear();


function Card(props){
    const {titleText,descText} = props;
return  <div className='card'>
            <h3 className='cardTitle'>{titleText}</h3>
            <p className='cardDesc'>{descText}</p>
            <p className='cardFooter'>{dateName + "/"+ monthName + "/"  + currentYear}</p>
        </div>
}
export default Card;