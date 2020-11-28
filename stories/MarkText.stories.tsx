import MarkText from '../src/components/MarkText';
import React from 'react';

export default {
  title: 'MarkText 文本标记',
  component: MarkText,
}

export const CaseSensitive: React.ReactNode = ({ ...rest }) => (
  <div>
    <p>
      text: <span className="badge badge-secondary">Mamma mia</span>
    </p>
    <p>
      mark: <span className="badge badge-secondary">m</span>
    </p>
    <p>
      regexFlags: <span className="badge badge-secondary">ig</span>
    </p>
    <MarkText text="Mamma mia" mark="m" regexFlags="ig" />

    <hr/>

    <p>
      text: <span className="badge badge-secondary">Abra</span>
    </p>
    <p>
      mark: <span className="badge badge-secondary">A</span>
    </p>
    <p>
      regexFlags: <span className="badge badge-secondary">g</span>
    </p>
    <MarkText text="Abra" mark="A" regexFlags="g" />
  </div>
)

export const EscapeRegex = () => (
  <div>
    <p>
      text: <span className="badge badge-secondary">/(*._.*)\</span>
    </p>
    <p>
      mark: <span className="badge badge-secondary">.*</span>
    </p>
    <p>
      escapeRegex: <span className="badge badge-secondary">true</span>
    </p>
    <MarkText text="/(*._.*)\" mark=".*" />

    <hr/>

    <p>
      text: <span className="badge badge-secondary">/(*._.*)\</span>
    </p>
    <p>
      mark: <span className="badge badge-secondary">.*</span>
    </p>
    <p>
      escapeRegex: <span className="badge badge-secondary">false</span>
    </p>
    <MarkText text="/(*._.*)\" mark=".*" escapeRegex={false} />
  </div>
)
