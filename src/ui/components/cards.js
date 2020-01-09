import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { FaAngleDoubleRight as AngleDoubleRight } from 'react-icons/fa'

import { base } from 'Elements/base'
import { Box } from 'Elements/box'
import { Flex } from 'Elements/flex'
import { Text } from 'Elements/text'

import theme, { breakpoints as bp } from 'Base/theme'

const { colors } = theme

const xs = `@media (min-width: ${bp.xs})`

// --- COMPONENTS

// Icon Card
export const IconCard = ({ color, icon, title, description }) => {
  const Icon = icon
  return (
    <Base
      alignItems="center"
      bg="#fff"
      px={24}
      py={32}
      flexDirection={{ _: 'column', xs: 'row' }}
      flexWrap={{ xs: 'nowrap' }}
      justifyContent={{ _: 'center', xs: 'space-between' }}
      css={{ boxShadow: '0 25px 70px rgba(0,0,0,0.07)' }}
    >
      <IconWrapper>
        <Icon size={48} color={color} />
      </IconWrapper>
      <Content pl={12} pr={18} textAlign={{ _: 'center', xs: 'left' }}>
        <Title
          color="offBlack"
          fontSize={20}
          lineHeight="1.375"
          fontWeight="600"
          mb="8px"
        >
          {title}
        </Title>
        <Description fontSize={16}>{description}</Description>
      </Content>
    </Base>
  )
}

// Image Card
export const ImageCard2 = ({ image, title, description }) => {
  const descList = description.map(desc => `<li>${desc}</li>`)
  const bgImg = `url(${image})`
  return (
    <Base
      border="1px solid #f3f3f3"
      flexDirection="column"
      height="200px"
      flexWrap={{ xs: 'nowrap' }}
      position="relative"
      css={{
        backgroundImage: bgImg,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Content bg="rgba(0,0,0,0.5)" height="100%" p={20} textAlign="center">
        <Title
          as="h4"
          color="light"
          fontSize={24}
          lineHeight="1.375"
          fontWeight="600"
          position="absolute"
          bottom="25px"
          left="25px"
        >
          {title}
        </Title>
        {/* <Description color="light" display="none" fontSize={15}>
          {description.map((desc, index) => (
            <Box key={index}>{desc}</Box>
          ))}
        </Description> */}
      </Content>
    </Base>
  )
}

export const ImageCard = ({
  description,
  image,
  imgPos,
  imgSize,
  level,
  title,
}) => {
  // const descList = description.map(desc => `<li>${desc}</li>`)
  const bgImg = `url(${image})`
  return (
    <Base
      bg="#fff"
      // border="1px solid #f3f3f3"
      boxShadow="0 1px 3px rgba(0,0,0,0.07)"
      flexDirection="column"
      flexWrap={{ xs: 'nowrap' }}
      // css={{
      //   backgroundImage: bgImg,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      //   backgroundRepeat: 'no-repeat',
      // }}
    >
      {/* <Title
        as="h4"
        bg="primary.dark"
        color="light"
        fontSize={18}
        lineHeight="1.375"
        fontWeight="600"
        py={4}
        textAlign="center"
      >
        {title}
      </Title> */}
      <Image
        height="150px"
        width="100%"
        css={{
          backgroundImage: bgImg,
          backgroundSize: imgSize || 'cover',
          backgroundPosition: imgPos || 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <Content p={20}>
        <Title
          as="h4"
          color="dark"
          fontSize={20}
          lineHeight="1.375"
          fontWeight="500"
          mb="6px"
        >
          {title}
        </Title>
        <Level fontSize={14} fontWeight="400" color="grey.dark">
          {level}
        </Level>
        {/* <Description fontSize={15}>
          {description.map((desc, index) => (
            <Box key={index}>{desc}</Box>
          ))}
        </Description> */}
        <Description color="dark" fontSize={15}>
          {description}
        </Description>
        <Link
          to="/"
          style={{
            color: colors.primary.base,
            display: 'flex',
            alignItems: 'center',
            marginTop: '24px',
          }}
        >
          Learn more
          <AngleDoubleRight
            color={colors.primary.base}
            size={14}
            style={{ marginLeft: 5 }}
          />
        </Link>
      </Content>
    </Base>
  )
}

// --- STYLES
const Base = styled(Flex)``
const Content = styled(Box)``
const Title = styled(Text)``
const Level = styled(Text)``
const Image = styled(Box)``

const IconWrapper = styled.i`
  font-size: 48px;
  padding: 24px;

  svg {
    color: ${props => props.color};
    fill: ${props => props.color};
  }
`

const Description = styled(Text)`
  color: ${colors.grey.darker};
  font-weight: 400;
`

// IMAGE __ OLD
// export const ImageCardOLD = ({ image, title, description }) => {
//   const descList = description.map(desc => `<li>${desc}</li>`)
//   const bgImg = `url(${image})`
//   return (
//     <Base
//       bg="#fff"
//       border="1px solid #f3f3f3"
//       flexDirection="column"
//       flexWrap={{ xs: 'nowrap' }}
//       css={{
//         backgroundImage: bgImg,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//       }}
//     >
//       <Image
//         height="150px"
//         width="100%"
//         backgroundImage={bgImg}
//         backgroundSize="cover"
//         backgroundPosition="center"
//         backgroundRepeat="none"
//       />
//       <Content p={20} textAlign="center">
//         <Title
//           as="h4"
//           color="grey.darker"
//           fontSize={24}
//           lineHeight="1.375"
//           fontWeight="600"
//           mb="6px"
//         >
//           {title}
//         </Title>
//         <Description fontSize={15}>
//           {description.map((desc, index) => (
//             <Box key={index}>{desc}</Box>
//           ))}
//         </Description>
//       </Content>
//     </Base>
//   )
// }
