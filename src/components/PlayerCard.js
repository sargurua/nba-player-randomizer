import React from 'react'

import { Card, Image, Header } from 'semantic-ui-react'

export default ({player}) => {
    return (
        <Card fluid>
            <Image centered src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/${player.team_ref}/2019/260x190/${player.player_ref}.png`} onError={e => e.target.src=`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.player_ref}.png`} alt={`${player.first_name} ${player.last_name}`} />
            <Header as='h2'>{player.name}</Header>
        </Card>
    )
}