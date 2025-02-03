import './style.css';

const Buttons = ({ handlePageChange, prevPage, nextPage, page }) => {
    return (
        <>
            <button className='button-navigate'
                onClick={() => handlePageChange(page - 1)}
                disabled={!prevPage}
            >
                previous
            </button>
            <button className='button-navigate'
                onClick={() => handlePageChange(page + 1)}
                disabled={!nextPage}
            >
                next
            </button>
        </>
    );
}

export default Buttons;