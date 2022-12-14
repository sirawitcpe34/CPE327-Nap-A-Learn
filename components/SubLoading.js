import { Container, Image } from '@chakra-ui/react'

// loading page for wait fetch data
export default ({ isLoading }) => {
    if (isLoading) {
        return (
            <Container
                width='100vw'
                height='100vh'
                backgroundColor='#F6E8DF'
                padding='0'
                margin='0'
                zIndex='100'
                position='fixed'
                maxWidth='100vw'
                top='0'
                left='0'
            >
                <Image
                    src='/image/loading.gif'
                    position='fixed'
                    top='50%'
                    left='50%'
                    transform='translate(-50%,-50%)'
                    width='200px'
                />
            </Container>
        )
    }
}