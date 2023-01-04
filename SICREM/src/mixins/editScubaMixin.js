import { mapState, mapActions } from 'vuex'
export default {
	computed: {
		...mapState({
			certification: state => state.certification.certification,
			certificationCompany: state => state.certification.company,
			system: state => state.certification.system
		})
	},
	methods: {
		...mapActions([
			'getCertificationById',
			'setCompressors',
			'setMaskHelmets',
			'setCompressedAirTanks',
			'setCylinderFrames',
			'setComunicators',
			'setUmbilicals',
			'setEmergencyCylinders',
			'setControlPanels',
			'setSignets',
			'setWinchs',
			'setHyperbaricChambers',
			'setBaskets',
			'setPorticos',
			'setOtherItemsByField',
			'setCompany'
		]),
		async loadEditInfos(id) {
			await this.getCertificationById({ id, system: 1 })
			this.setCompany(this.certificationCompany)
			if (this.system) {
				this.setCompressors(this.system.compressors)
				this.setMaskHelmets(this.system.maskshelmets)
				this.setCompressedAirTanks(this.system.compressedsairtanks)
				this.setCylinderFrames(this.system.cylindersframes)
				this.setComunicators(this.system.comunicators)
				this.setUmbilicals(this.system.umbilicals)
				this.setEmergencyCylinders(this.system.emergencycylinders)
				this.setControlPanels(this.system.controlpanels)
				this.setSignets(this.system.signets)
				this.setWinchs(this.system.winchs)
				this.setHyperbaricChambers(this.system.hyperbaricschambers)
				this.setBaskets(this.system.baskets)
				this.setPorticos(this.system.porticos)
				this.setOtherItemsByField(this.system.generalsystemitems)
			}
		}
	}
}
