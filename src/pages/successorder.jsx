import React from 'react'
import Button from '../components/Button/Button'
import { useNavigate } from 'react-router-dom';
const SuccessOrder = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div className="text-center text-slate-500 mt-10">
            <h2 className="text-2xl font-bold">Your order has been placed successfully!</h2>
                <p>Thank you for your purchase. We will send a confirmation email shortly.</p>
                 <Button
                    className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    onClick={() => navigate('/home')}
                >
                    Back to Home
                </Button>
        </div>
    </div>
  )
}

export default SuccessOrder
