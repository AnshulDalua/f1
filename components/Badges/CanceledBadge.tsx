import React, {useState} from "react"
import withTranslation from 'next-translate/withTranslation'
import type { I18n } from 'next-translate'

interface Props {
	i18n: I18n;
	mobileOnly?: boolean;
}

class CanceledBadge extends React.Component<Props> {
  render() {
	const { t, lang } = this.props.i18n

	return (
		<span className={`bg-red-600 rounded px-1 md:px-2 py-1 text-xsm text-black font-bold uppercase ml-2 ${this.props.mobileOnly ? "display sm:hidden" : ""}`}>
			{t("localization:badges.canceled")}
		</span>
	);
  }
}

export default withTranslation(CanceledBadge);