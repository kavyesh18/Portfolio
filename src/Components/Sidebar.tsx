import { useDisclosure } from '@mantine/hooks';
import { Drawer, Burger } from '@mantine/core';
import { IconX } from "@tabler/icons-react";
import { navlinks } from './Header';

const Sidebar = () => {
  const [opened, {close, toggle}] = useDisclosure(false);

  return (
    <>
      <Drawer.Root opened={opened} onClose={close} className='md:hidden !z-0' position='right' size="40vh" >
        <Drawer.Overlay style={{ backgroundOpacity: 0.5, blur: 4 }} className='!z-0'/>
        <Drawer.Content className='!z-0' bg="#0A192F">
          <Drawer.Header bg="#0A192F">
            <Drawer.CloseButton className='hover:bg-bgcolor' icon={<IconX size={20} stroke={1.5} />} />
          </Drawer.Header>
          <Drawer.Body bg="#0A192F" className='mt-20 flex flex-col dm-mono-regular gap-4 text-primaryColor hover:text-textColor text-lg'>
            {navlinks(true)}
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Burger className='md:hidden' size='lg' color='#64FFDA' opened={opened} onClick={toggle}/>
    </>
  );
}

export default Sidebar;
