import Head from "next/head";
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
    return (
        <Section {...props}>
            <div className="space-y-16">{children}</div>
        </Section>
    )
}

function Appearance({ title, description, event, cta, href }) {
    return (
        <Card as="article">
            <Card.Title as="h3" href={href}>
                {title}
            </Card.Title>
            <Card.Eyebrow decorate>{event}</Card.Eyebrow>
            <Card.Description>{description}</Card.Description>
            <Card.Cta>{cta}</Card.Cta>
        </Card>
    )
}

export default function Speaking() {
    return (
        <>
            <Head>
                <title>Speaking - Takuto Kudo</title>
                <meta
                    name="description"
                    content="Podcasts, speaking at events, etc."
                />
            </Head>
            <SimpleLayout
                title="Podcasts, speaking at events, etc."
                intro="Tech news, chatter and banter."
            >
                <div className="space-y-20">
                    <SpeakingSection title="Podcasts">
                        <Appearance
                            href="https://podcasters.spotify.com/pod/dashboard/analytics/episodes/59221246"
                            title="【エンジニアインタビュー】カーリース事業VPoE長妻さん編【webエンジニアラジオ】#20"
                            description="インフラ、バックエンド、モバイルアプリからM&Aまで。経験幅広すぎVPoEを招いてあれこれ聞いてみました。"
                            event="Oct 2022"
                            cta="Listen to podcast"
                        />
                        <Appearance
                            href="https://spotifyanchor-web.app.link/e/2ISsECRpACb"
                            title="#11 アリかキリギリスかで言ったらキリギリスであれ（DIE WITH ZERO書評）"
                            description="紹介した書籍：DIE WITH ZERO 人生が豊かになりすぎる究極のルール アリとキリギリス、豊かに一生を過ごしたのはどっちだ / 経験の幅が人間の幅をつくる説 / 思い出配当を増やす"
                            event="Aug 2022"
                            cta="Listen to podcast"
                        />
                        <Appearance
                            href="https://spotifyanchor-web.app.link/e/KDcrLvGpACb"
                            title="#05 エンジニア採用マンに聞くメルカリのインド事例 / リモートワークと成果主義、メリットデメリット、2-6-2の法則"
                            description="#05 エンジニア採用マンに聞くメルカリのインド事例 / リモートワークと成果主義、メリットデメリット、2-6-2の法則"
                            event="July 2022"
                            cta="Listen to podcast"
                        />
                    </SpeakingSection>
                </div>
            </SimpleLayout>
        </>
    )
}
