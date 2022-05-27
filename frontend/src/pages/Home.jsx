import { Link } from 'react-router-dom'
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { reset } from '../features/tickets/ticketSlice'

//had to change Link in this file due to useEffect error in Tickets.jsx

function Home() {

    const dispatch = useDispatch()
    return (
        <>
            <section className="heading">
                <h1>What do you need help with?</h1>
                <p>Please choose from an option below</p>
            </section>

            <Link
                onClick={() => dispatch(reset())}
                to="/new-ticket"
                className="btn btn-reverse btn-block"
            >
                <FaQuestionCircle /> Creat a New Ticket
            </Link>
            {/* <Link to='/new-ticket' className='btn btn-reverse btn-block'>
                 Create a New Ticket

            </Link> */}
            <Link to='/tickets' className='btn btn-block'>
                <FaTicketAlt /> View my Tickets

            </Link>
        </>
    )
}

export default Home