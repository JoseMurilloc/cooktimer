import Image from 'next/image'
import Link from 'next/link'
import { GithubLogo, Share } from 'phosphor-react'

import * as S from './styles'
import { HeaderProps } from './types'

export default function Header (props: HeaderProps) {
  return (
    <S.ContainerHeader>
      <div className="content">
        <div className="logo">
          <Image src="/logo.svg" fill alt="Logo do Cook Timer" />
        </div>

        <S.ProfileHeader>
          <li>
            <Link href="https://github.com/JoseMurilloc/cooktimer" target={'_blank'}>
              <span>Contribuir</span>
              <GithubLogo size={22} weight="fill" />
            </Link>
          </li>
          <li>
            <Link href="/timer/1" target={'_blank'}>
              <span>Sobre nós</span>
              <Share size={22} weight="fill" />
            </Link>
          </li>
        </S.ProfileHeader>
      </div>
    </S.ContainerHeader>
  )
}
