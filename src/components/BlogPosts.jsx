import { useState } from 'react';
import {
    Box,
    Container,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider

} from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';

function BlogPost(blogList) {
    console.log(blogList);
    return (
        <Box>
            {blogList.data.length > 0 ? ( 
                blogList.data.map((post, index) => (
                <Card key={index} mb={4}>
                    <CardHeader >
                        {post.title}
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <ReactMarkdown components={{
                            p: 'Text'
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