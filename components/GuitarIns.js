import { Center, Box, Flex, Select } from "@chakra-ui/react"
import Colour from "../color/napalearncolor"
import { useState } from "react"
import Guitar, { getRenderFingerSpn, spanishTheme } from "react-guitar";
import { standard } from "react-guitar-tunings";
import useSound from "react-guitar-sound";
import coco from 'react-guitar-theme-coco'
import dark from 'react-guitar-theme-dark'
import Pomodoro from "./Pomodoro";

// guitar instrument function
function GuitarIns() {
    {/* chord object */ }
    const strings = {
        Cm: [3, 1, 0, 1, 3, -1],
        CM: [0, 1, 0, 2, 3, -1],
        Dm: [1, 3, 2, 0, -1, -1],
        Fmaj7: [0, 1, 2, 3, 0, 1],
        Gmaj9: [2, 0, 0, 0, 0, 3],
        Amaj9: [4, 2, 4, 2, 0, -1]
    };
    const [stringsName, setStrings] = useState("Cm"); {/* set default chord */ }
    const { play } = useSound({ fretting: strings[stringsName], tuning: standard });
    const theme = { spanishTheme, coco, dark }
    const [themeName, setThemeName] = useState('spanishTheme'); {/* set default theme */ }

    return (
        <div>
            <Center>
                <Flex gap={32}>
                    <Flex direction='column' marginTop={70}>
                        {/* select chord */}
                        <Select value={stringsName} onChange={e => setStrings(e.target.value)} bgColor={Colour.White} borderColor={Colour.NextPink} border='2px' width={72} marginTop={6} marginLeft={10}>
                            <option value="Cm">Cm</option> {/*C minor */}
                            <option value="CM">CM</option> {/*C major*/}
                            <option value="Dm">Dm</option> {/*D major*/}
                            <option value="Fmaj7">Fmaj7</option>
                            <option value="Gmaj9">Gmaj9</option>
                            <option value="Amaj9">Amaj9</option>
                        </Select>
                        {/* select theme */}
                        <Select value={themeName} onChange={e => setThemeName(e.target.value)}
                            bgColor={Colour.White} borderColor={Colour.NextPink} border='2px' width={72} marginTop={6} marginLeft={10}>
                            <option value="spanishTheme">Spanish Theme</option>
                            <option value="coco">Coco Theme</option>
                            <option value="dark">Dark Theme</option>
                        </Select>
                    </Flex>
                    <Pomodoro /> {/* show pomodoro clock*/}
                </Flex>
            </Center>
            <Center>
                <Box marginTop={8} maxWidth={1100}>
                    {/* show guitar instrument */}
                    <Guitar
                        strings={strings[stringsName]}
                        renderFinger={getRenderFingerSpn(standard)}
                        playOnHover
                        onPlay={play}
                        theme={theme[themeName]}
                    />
                </Box>
            </Center>
        </div>
    )
}

export default GuitarIns;