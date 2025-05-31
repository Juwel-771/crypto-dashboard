import Topnav from '../../components/Topnav';
import Sidenav from '../../components/Sidenav'
import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

const Dashboard = () => {
    return (
        <div>
           <Flex>
            <Sidenav></Sidenav>
            <Box flexGrow={1}>
                <Topnav></Topnav>
            </Box>
           </Flex>
        </div>
    );
};

export default Dashboard;