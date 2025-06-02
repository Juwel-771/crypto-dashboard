import { Box, Flex } from '@chakra-ui/react'
import Sidenav from './Sidenav'
import Topnav from './Topnav'

const DashboardLayout = ({title, children}) => {
  return (
    <Flex>
        <Sidenav>
            <Box flexGrow={1}>
                <Topnav title = {title}></Topnav>
                <Box>{children}</Box>
            </Box>
        </Sidenav>
    </Flex>
  )
}

export default DashboardLayout