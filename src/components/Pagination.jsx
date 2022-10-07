import styled from "styled-components";

export const Pagination = (props) => {

    const Wrapper = styled.div`
        display: flex;
        justify-content: space-evenly;
        margin: 20px 0;
        max-width: 300px;
        text-align: center;
        margin-top: 24px;
    `;

    const Button = styled.button`
        background-color: #141115;
        color: #fff;
        border: 2px solid #8D6346;
        margin: 0 15px;
        cursor: pointer;
        text-align: center;
        min-width: 50px;
        min-height: 50px;
        border-radius: 50%;
        :disabled {
            opacity: 0.4;
            cursor: not-allowed;
        }
        &:hover {
            background-color: #8D6346;
            // color: #141115;
        }
    `;

    const PageNumb = styled.p`
        min-width: 50px;
    `;

    return (
        <Wrapper>
            <Button onClick={props.onFirstPage} disabled={props.offset === 0 ? 'disabled' : null}>1</Button>
            <Button onClick={props.onPrevPage} disabled={props.offset === 0 ? 'disabled' : null}>{"<"}</Button>
            <PageNumb>
                {
                    // page information
                    Math.floor(props.offset/10+1)
                }
            </PageNumb>
            <Button onClick={props.onNextPage} disabled={props.offset >= props.lastPage ? 'disabled' : null}>{">"}</Button>
            <Button onClick={props.onLastPage} disabled={props.offset >= props.lastPage ? 'disabled' : null}>{Math.floor(props.lastPage/10+1)}</Button>
        </Wrapper>
    );
};