import  { useState } from "react";
//this include both autommatic expnad and close and 2nd open only not automatically close
const Accordion=()=>{
//must check liftingstatejs file also
    const data = [
        {
            title: "Accordion Item 1",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam sed elit eleifend viverra nec ut purus. Nam ac mauris sapien. Sed fringilla velit nec justo finibus fermentum."
        },
        {
            title: "Accordion Item 2",
            content: "Integer feugiat, arcu non feugiat vehicula, nunc lorem consectetur leo, nec condimentum purus eros eget nulla. In at tellus nec ante feugiat ultricies nec sed ligula."
        },
        {
            title: "Accordion Item 3",
            content: "Vivamus fringilla orci in lacus placerat, nec faucibus metus feugiat. Donec ut enim vitae mi consectetur elementum. Ut in diam at lorem lacinia finibus."
        }
    ];
    const [indi,setindi]=useState(null)
   
const handleShow=(index,value)=>{
    setindi(index)
}
/*
return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
     
      ))}
    </div>
  );*/
//this below is used when we want one open and on another open previous one must be close

    return(
        <>
        
        
        
        {
            data.map((item,index)=>{
               // console.log(item)
                return(
                <>
                <p>{item.title}</p>
              {indi===index?<p>{item.content}</p>:""}  

                <button onClick={()=>handleShow(index,item.content)}>show</button>
             
                </>
                )
            })
        }
        
        
        </>
    )

}

export default Accordion




const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
console.log(title,Math.random(),"this is new",isOpen)
  const toggleContent = () => setIsOpen(!isOpen);

  return (
    <div className="accordion-item">
      <button className="accordion-title" onClick={toggleContent}>
        {title}
      </button>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};
