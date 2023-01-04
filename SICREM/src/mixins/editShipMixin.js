import { mapActions } from 'vuex'
export default {
	methods: {
		...mapActions([
			'setShip',
			'setGtf',
			'setFreeBoard',
			'setFreeBoardDraft',
			'setMtf',
			'setMtfDraft',
			'setShipYard',
			'setOtherInfos',
			'setRadioCovarages',
			'setSouls',
			'setPowers'
		]),
		loadEditInfos(resp) {
			this.shipownerId = resp.ship.shipowner
			this.setShip(resp.ship)
			this.setOtherInfos(resp.ship.otherinfos)

			this.setGtf(resp.gtf)
			this.setShipYard(resp.gtf.shipyard)
			this.setPowers(resp.gtf.propulsionandpower)
			this.setRadioCovarages(resp.gtf.rtc)

			this.setMtf(resp.mtf.mtf)
			this.setSouls(resp.mtf.mtf.souls)
			this.setFreeBoard(resp.mtf.mtf.freeboards.freeBoard)
			this.setFreeBoardDraft(resp.mtf.mtf.freeboards.freeBoardDraft)

			resp.mtf.mtf.drafts.forEach(draft_ => {
				this.setMtfDraft({
					draft: draft_.isligth ? 'lightdraft' : 'heavydraft',
					value: draft_
				})
			})
		}
	}
}
