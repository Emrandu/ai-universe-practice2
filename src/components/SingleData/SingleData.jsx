import React from 'react';

const SingleData = (props) => {
    console.log(props);
    const {name, image, features, description, published_in, id} = props.singleData;

    const handleId = (id) =>{
            console.log(id)
    }



    return (
        <div>
            <div className="card w-full bg-base-100 shadow-2xl">
  <figure className='w-full'>
    <img className='w-96 h-64 rounded-xl' src={image} alt="Album"/>
    </figure>

  <div className="card-body">
    <h2 className="card-title font-bold">Features</h2>

            {
                features.map((feature, index) => <p>
                    {index + 1} {feature}
                </p> )
            }
            <hr  className='border-2 border-info my-4' />

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nam mollitia omnis nostrum nulla enim veniam? Inventore doloremque provident libero?</p>
    
            <h1 className='font-bold text-xl'>{name}</h1>

            <div className='flex justify-between'>
                <div className='flex'>
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
</svg>

                    </span>
                    <p>{published_in}</p>
                </div>
                <div>
                
                  
                    <button className="btn" onClick={()=>window.my_modal_4.showModal()}> 
                    
                    <span onClick={()=>props.setUniqueId(id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                     </span>

                    </button>
                   
                </div>
            </div>
         

    
  </div>
</div>
        </div>
    );
};

export default SingleData;