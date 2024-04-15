import {
    Box,
    Heading,
    Card,
    CardBody,
    CardHeader,
    Divider,
    Text,
    UnorderedList,
    ListItem,

} from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';

function BlogPost(blogList) {
    

    return (
        <Box>
            {blogList.data.length > 0 ? ( 
                blogList.data.map((post, index) => (
                <Card key={index} mb={4} boxShadow='2xl'>
                    <CardHeader fontSize='xl'>
                        <Heading mb={2}>
                            {post.title}
                        </Heading>
                            <Text as='i'>{new Date(post.created.iso).toLocaleString("en-US",{
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            })}</Text>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <ReactMarkdown components={{
                            h1: ({ children }) => <Text fontSize='2xl' mb={2}>{children}</Text>,
                            p: ({ children }) => <Text mb={2} fontSize='lg'>{children}</Text>,
                                li: ({ children }) => <UnorderedList><ListItem fontSize='lg'>{children}</ListItem></UnorderedList>
                        }}>
                            {post.docContent.markdown}
                        </ReactMarkdown>
                    </CardBody>
                </Card>
            ))) : (
                <Card>
                    <CardBody>
                        No blog posts found.
                    </CardBody>
                </Card>
            )}
        </Box>
    )
}

export default BlogPost;