import React from 'react';
import Head from 'next/head'

const Meta = ({ title, keywords, icon, description }: { title : string, keywords? : string, icon: string, description?: string }) => {
    return (

        <Head>
            <meta name='viewport'
                content='width=device-width, initial-scale=1'
            />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel='icon' href={icon} />
            <title>{title} </title>
        </Head>
    )
};

export default Meta;