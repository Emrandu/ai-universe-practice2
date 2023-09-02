import React from 'react';

const Modal = (props) => {
  console.log(props.singleData)
   const {features, image_link, integrations, description } =props.singleData;
  return (
    <>
         <dialog id="my_modal_4" className="modal">
  <form method="dialog" className="modal-box w-11/12 max-w-5xl">
  <div className="card lg:card-side bg-base-100 ">

  
  <div className="card-body border-2 border-error rounded-xl mr-4 bg-zinc-400">
    <h2 className="card-title">{description? description : 'No data Found'}</h2>


    <div className='flex justify-between'>
        <div>
          <h1 className='font-bold text-xl'>Features</h1>
             {
              Object.values(features || {}).map((value) =>(
                <p>{value.feature_name ? value.feature_name : 'Not Found'}</p>
              ))
             }

        </div>
        <div>
          <h1 className='font-bold text-xl'>Integrations</h1>

             {
              integrations && 
              integrations ?. map((int) =>(
                <p> {int ? int : 'not found'} </p>
              ))
             }

        </div>

    </div>
   
  </div>

<figure className='w-full'>
    <img src={image_link ? image_link[0] : 'no data'} alt="Album"/>
    </figure>

</div>

    <div className="modal-action">
      {/* if there is a button, it will close the modal */}
      <button className="btn">Close</button>
    </div>
  </form>
</dialog>
    </>
  );
};

export default Modal;