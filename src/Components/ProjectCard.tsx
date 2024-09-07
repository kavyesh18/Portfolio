import { Badge, Button, Card, Group, Image, Indicator, Text } from '@mantine/core';
import { useDisclosure } from "@mantine/hooks";
import FullProjectModal from './FullProjectModal';

const ProjectCard = (props: any) => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <div data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-sine">
            <Card
                onClick={open}
                className='!bg-bgcolor cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 mb-5 hover:!shadow-[0_0_10px_1px_#64FFDA] !border-primaryColor !border-2'
                style={{ maxWidth: '350px', width: '100%', display: 'flex', flexDirection: 'column' }}
                shadow="lg"
                padding="lg"
                radius="lg"
                withBorder
            >
                <Card.Section className='p-3'>
                    <Image
                        className='!rounded-xl !shadow-[0_0_5px_0_#64FFDA]'
                        src={props.image}
                        alt={props.image}
                    />
                </Card.Section>

                <Group justify="space-between" mt="xs" mb="xs">
                    <Text className='!font-bold gap-3 !text-white flex items-center' fw={500}>
                        {props.title}
                        {props.live && 
                            <Badge
                                variant="outline"
                                color="red"
                                rightSection={<Indicator color='red' position='middle-end' size={7} processing />}
                            >
                                Live
                            </Badge>
                        }
                    </Text>
                </Group>

                <Group mb="xs">
                    {props.technologies.slice(0, 3).map((tech: string, index: number) =>
                        <Badge key={index} size='lg' variant="light" color="#64FFDA">
                            {tech}
                        </Badge>
                    )}
                </Group>

                <Text className='!text-justify' lineClamp={5} size="sm" c="dimmed">
                    {props.desc}
                </Text>

                <Button
                    onClick={open}
                    className="!bg-primaryColor !text-bgcolor"
                    fullWidth
                    mt="md"
                    radius="md"
                >
                    Show more
                </Button>
            </Card>
            <FullProjectModal
                opened={opened}
                close={close}
                title={props.title}
                desc={props.desc}
                image={props.image}
                live={props.live}
                link={props.link}
                github={props.github}
                technologies={props.technologies}
            />
        </div>
    );
};

export default ProjectCard;
