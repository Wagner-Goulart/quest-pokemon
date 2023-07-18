import { useContext } from "react"
import { StyledDiv } from "./loaderStyles"
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



export { Loader }