import { useContext } from "react"
import { styled } from "styled-components"
import { ThemeContext, themes } from "../../contexts/theme-context"
import { ThreeDots } from 'react-loader-spinner'


const Loader = () => {

    const { theme } = useContext(ThemeContext)
    return (
        <>
            <StyledDiv theme={theme}>
                <ThreeDots theme={theme}
                    height="80"
                    width="80"
                    radius="9"
                    color={theme === themes.light ? theme.primary : theme.color}
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName="spinner"
                    visible={true}
                />
            </StyledDiv>
        </>
    )
}

const StyledDiv = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 127px);
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};
`

export { Loader }