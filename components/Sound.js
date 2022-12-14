import { Box, AspectRatio } from "@chakra-ui/react"

// sound player video
function Sound({ src }) {
    return (
        <Box align='center'>
            <AspectRatio maxWidth={1024} ratio={16 / 9}>
                <iframe src={src} allowFullScreen />
            </AspectRatio>
        </Box>
    )
}
export default Sound;