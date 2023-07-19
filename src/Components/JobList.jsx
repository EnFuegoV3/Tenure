import { Flex, Text,IconButton, Input } from "@chakra-ui/react"
import CircumIcon from "@klarr-agency/circum-icons-react"

export function JobList(props) {
    return (
        <Flex key={props.index} gap='5px' p='5px' border={props.job.id === props.selectedJob.id ? '1px solid black' : ''}>
            <Text
                as='Button'
                fontFamily={'prompt'}
                fontSize='1.1rem'
                color={props.job.id === props.selectedJob.id ? '#e94e4e' : ''}
                onClick={props.select}
                >
                    { props.editJobName ? <Input 
                                        placeholder={props.job.name} 
                                        type="text"
                                        name="name"
                                        value={props.job.name}
                                        onChange={props.handleNameChange}
                                    /> 
                                    : `${props.job.name}`}
            </Text>
            <IconButton
                ml='10px'
                id={props.job.id}
                variant='ghost'
                size='xs'
                onClick={props.changeJobName}
                icon={ !props.editJobName ? <CircumIcon name="edit" color='black' size='20px'/> : <CircumIcon name="square_check" color='green' size='25px'/>}
            />
            <IconButton
                id={props.job.id}
                variant='ghost'
                size='xs'
                icon={<CircumIcon name="trash" color='black' size='20px'/>}
            />
        </Flex>
    )
}