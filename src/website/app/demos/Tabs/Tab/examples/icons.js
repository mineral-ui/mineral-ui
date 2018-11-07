/* @flow */
import React, { Fragment } from 'react';
import IconCameraAlt from 'mineral-ui-icons/IconCameraAlt';
import IconInfoOutline from 'mineral-ui-icons/IconInfoOutline';
import IconMusicNote from 'mineral-ui-icons/IconMusicNote';
import { createStyledComponent } from '../../../../../../library/styles';
import Tabs, { Tab } from '../../../../../../library/Tabs';
import Grid, { GridItem } from '../../../../../../library/Grid';
import Text from '../../../../../../library/Text';

const styles = {
  album: ({ theme }) => ({
    marginBottom: theme.space_stack_xs
  }),
  albums: ({ theme }) => ({
    columns: 2,
    columnGap: theme.space_inline_md,
    fontSize: theme.fontSize_ui,
    listStyle: 'none',
    margin: `0`,
    padding: 0,

    '@media(min-width: 80em)': {
      columns: 3
    }
  }),
  img: {
    maxWidth: '100%'
  }
};

const Album = createStyledComponent('li', styles.album);
const Albums = createStyledComponent('ol', styles.albums);
const Img = createStyledComponent('img', styles.img);

const content = {
  /* eslint-disable react/no-unescaped-entities */
  bio: (
    <Fragment>
      <Text>
        The Rolling Stones are an English rock band formed in London, England,
        in 1962. The first stable line-up consisted of Brian Jones (guitar,
        harmonica), Mick Jagger (lead vocals), Keith Richards (guitar, backing
        vocals), Bill Wyman (bass), Charlie Watts (drums), and Ian Stewart
        (piano). Stewart was removed from the official line-up in 1963 but
        continued as a touring member until his death in 1985. Brian Jones was
        the original leader of the group.
      </Text>
      <Text>
        <Fragment>
          The Rolling Stones were at the forefront of the British Invasion of
          bands that became popular in the United States in 1964 and were
          identified with the youthful and rebellious counterculture of the
          1960s. Rooted in blues and early rock and roll, the group began a
          short period of musical experimentation in the mid-1960s that peaked
          with the psychedelic album <em>Their Satanic Majesties Request</em>{' '}
          (1967). Subsequently, the group returned to its "bluesy" roots with{' '}
          <em>Beggars Banquet</em> (1968) which along with its follow-ups{' '}
          <em>Let It Bleed</em> (1969), <em>Sticky Fingers</em>
          (1971) and <em>Exile on Main St.</em> (1972) is generally considered
          the band's best work and is seen as their "Golden Age". During this
          period, they were first introduced on stage as "The Greatest Rock and
          Roll Band in the World". Musicologist Robert Palmer attributed the
          endurance of the Rolling Stones to their being "rooted in traditional
          verities, in rhythm-and-blues and soul music", while "more ephemeral
          pop fashions have come and gone".
        </Fragment>
      </Text>
    </Fragment>
  ),
  /* eslint-enable react/no-unescaped-entities */
  albums: (
    <Albums>
      {[
        '1964 – The Rolling Stones',
        '1964 – 12 X 5',
        '1965 – The Rolling Stones No. 2',
        '1965 – Out of Our Heads',
        "1965 – December's Children (And Everybody's)",
        '1966 – Aftermath',
        '1967 – Between the Buttons',
        '1967 – Their Satanic Majesties Request',
        '1968 – Beggars Banquet',
        '1969 – Let It Bleed',
        '1971 – Sticky Fingers',
        '1972 – Exile on Main St.',
        '1973 – Goats Head Soup',
        "1974 – It's Only Rock 'n Roll",
        '1976 – Black and Blue',
        '1978 – Some Girls',
        '1980 – Emotional Rescue',
        '1981 – Tattoo You',
        '1983 – Undercover',
        '1986 – Dirty Work',
        '1989 – Steel Wheels',
        '1994 – Voodoo Lounge',
        '1997 – Bridges to Babylon',
        '2005 – A Bigger Bang',
        '2016 – Blue & Lonesome'
      ].map((album, index) => (
        <Album key={index}>{album}</Album>
      ))}
    </Albums>
  ),
  photos: (
    <Grid>
      <GridItem>
        <Img
          alt="Rolling Stones in front of an iron door"
          src="https://lastfm-img2.akamaized.net/i/u/770x0/6e7eac3310bbf128cbae2c4c17443849.jpg#6e7eac3310bbf128cbae2c4c17443849"
        />
      </GridItem>
      <GridItem>
        <Img
          alt="Mick Taylor on guitar, 1972"
          src="https://upload.wikimedia.org/wikipedia/commons/8/8f/Mick_Taylor2.jpg"
        />
      </GridItem>
      <GridItem>
        <Img
          alt="Rolling Stones in concert, 1989"
          src="https://www.rockhall.com/sites/default/files/styles/header_image_portrait/public/rollingstones_001-sm.jpg?itok=6v34S7NS"
        />
      </GridItem>
    </Grid>
  )
};

export default {
  id: 'icons',
  title: 'Icons',
  description: `Tab can contain an [Icon](/components/icon) at the start of its
title.`,
  scope: {
    content,
    IconCameraAlt,
    IconInfoOutline,
    IconMusicNote,
    Tabs,
    Tab
  },
  source: `
    <Tabs label='Rolling Stones' height="15.2em">
      <Tab icon={<IconInfoOutline />} title="Bio">{content.bio}</Tab>
      <Tab icon={<IconMusicNote />} title="Albums">{content.albums}</Tab>
      <Tab icon={<IconCameraAlt />} title="Photos">{content.photos}</Tab>
    </Tabs>
  `
};
