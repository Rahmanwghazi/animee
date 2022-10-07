export const Pagination = (props) => {

    return (
        <div>
            {
                props.offset > 0 &&
                <><button onClick={props.onFirstPage}>1</button>
                    <button onClick={props.onPrevPage}>Prev</button>
                </>
            }

            <p>
                {
                    // page information
                    props.offset / 10 + 1
                }
            </p>
            {
                props.offset < props.lastPage &&
                <>
                    <button onClick={props.onNextPage}>Next</button>
                    <button onClick={props.onLastPage}>Last</button>
                </>
            }
        </div>
    );
};