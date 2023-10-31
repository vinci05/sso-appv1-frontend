// components/Modal.js
import Image from 'next/image';
import React, {useState} from 'react';
import ReactModal from 'react-modal'
import QRCode from 'qrcode.react';
import GoogleAuth from 'public/GoogleAuth.svg'
import { useRouter  } from 'next/router';
import speakeasy from 'speakeasy'
import { useAppContext } from '@/pages/context';

ReactModal.setAppElement('#__next');

const customStyles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    //j/ustifyContent: 'center',
    alignItems: 'center',
    maxWidth: '550px',
    height: '850x',
    maxHeight:'80%',
    padding: '40px',
    background: 'white',
    borderRadius: '5px',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};



export default function MyModal({ isOpen, onRequestClose }) {

  const{ verificationToast, setVerificationToast } = useAppContext();

  const [user2FACode, setuser2FACode] = useState('');

 
  const secret = 'BKaKRgMIb$gz@kNkE<L>:$B/699(I7y4';

  const router = useRouter();
  
  const handleNext = () =>{
    
    const verified = speakeasy.totp.verify({
      secret: secret,
      encoding: 'ascii',
      token: user2FACode,
      window: 2, 
    });


    if (verified) {
      console.log('2FA code is valid.');
      setVerificationToast(!verified);
      router.replace("/dashboard");
    } else {
      console.log('2FA code is invalid.');
      setVerificationToast(true);
    }

  

  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Modal"
      style={customStyles}
    >
      <div className='flex flex-col items-center'>
      <Image src = {GoogleAuth} alt="GoogleAuth" className=' w-24 h-24 mb-3' />
      <h2 className=' text-2xl font-semibold m-2 mb-4'>Set up Authenticator</h2>
      <div className='pl-3 mt-3 mb-3'>
      <ul className='list-disc text-lg'>
        <li>Get the Authenticator App from the <a href='https://play.google.com/store/apps/details?id=com.azure.authenticator&hl=en_IN&gl=US&pli=1' className=' cursor-pointer text-green-600'>App Store.</a></li>
        <li>In the App, select <a className='font-semibold'>Set up account.</a></li>
        <li>Choose <a className='font-semibold'>Scan barcode.</a></li>
      </ul>
      </div>
      {/* <QRCode value={binaryDataURL} size={200} className=" bg-white m-4"/> */}
      <img alt="qrcode" src="data:image/png;base64,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
"></img>
      <p className=' text-sm font-bold'>or Enter code manually</p>
      <input placeholder='Enter code' value={user2FACode} onChange={(e) => setuser2FACode(e.target.value)} className=' border-gray-300 border rounded pt-3 pb-3 w-full mt-3 mb-3 pl-2'></input>
      {verificationToast ? <p className=' text-red-600'>OTP is invalid!</p> : ""}
      <button type='submit' className='bg-green-600 w-full mt-3 mb-3 pt-2 pb-2 rounded text-white' onClick={handleNext}>Next</button>
      <button className='absolute top-2 right-2 w-6 h-6 p-1 bg-white border border-gray-300 rounded cursor-pointer flex justify-center items-center text-lg font-semibold' onClick={onRequestClose}>x</button>
      </div>
    </ReactModal>
  );
}


