import Vue from 'vue'
import Vuex from 'vuex'
import clients from './modules/clients'
import company from './modules/company'
import levels from './modules/levels'
import contacts from './modules/contacts'
import address from './modules/address'
import types from './modules/ships/types'
import ships from './modules/ships/ships'
import gtf from './modules/ships/gtf'
import mtf from './modules/ships/mtf'
import shipyards from './modules/ships/shipyards'
import freeBoard from './modules/ships/freeBoard'
import freeBoardDraft from './modules/ships/freeBoardDraft'
import souls from './modules/ships/souls'
import propulsionAndPower from './modules/ships/propulsionAndPower'
import radioCoverages from './modules/ships/radioCoverages'
import otherInfos from './modules/ships/otherInfos'
import shipowners from './modules/ships/shipowners'
import compressor from './modules/scuba/compressor'
import maskHelmet from './modules/scuba/maskHelmet'
import generalSystemItems from './modules/scuba/generalSystemItems'
import compressedAirTank from './modules/scuba/compressedAirTank'
import cylinderFrame from './modules/scuba/cylinderFrame'
import comunicator from './modules/scuba/comunicator'
import umbilical from './modules/scuba/umbilical'
import emergencyCylinder from './modules/scuba/emergencyCylinder'
import controlPanel from './modules/scuba/controlPanel'
import signet from './modules/scuba/signet'
import winch from './modules/scuba/winch'
import hyperbaricChamber from './modules/scuba/hyperbaricChamber'
import basket from './modules/scuba/basket'
import portico from './modules/scuba/portico'
import certification from './modules/scuba/certification'
import depthGauges from './modules/hyperbaricsChambers/depthGauges'
import loader from './modules/loader'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		clients: {
			state: clients.state,
			mutations: clients.mutations,
			actions: clients.actions
		},
		ships: {
			state: ships.state,
			mutations: ships.mutations,
			actions: ships.actions
		},
		contacts: {
			state: contacts.state,
			mutations: contacts.mutations,
			actions: contacts.actions,
			getters: contacts.getters
		},
		address: {
			state: address.state,
			mutations: address.mutations,
			actions: address.actions,
			getters: address.getters
		},
		types: {
			state: types.state,
			mutations: types.mutations,
			actions: types.actions,
			getters: types.getters
		},
		gtf: {
			state: gtf.state,
			mutations: gtf.mutations,
			actions: gtf.actions,
			getters: gtf.getters
		},
		mtf: {
			state: mtf.state,
			mutations: mtf.mutations,
			actions: mtf.actions,
			getters: mtf.getters
		},
		shipyards: {
			state: shipyards.state,
			mutations: shipyards.mutations,
			actions: shipyards.actions,
			getters: shipyards.getters
		},
		freeBoard: {
			state: freeBoard.state,
			mutations: freeBoard.mutations,
			actions: freeBoard.actions,
			getters: freeBoard.getters
		},
		freeBoardDraft: {
			state: freeBoardDraft.state,
			mutations: freeBoardDraft.mutations,
			actions: freeBoardDraft.actions,
			getters: freeBoardDraft.getters
		},
		souls: {
			state: souls.state,
			mutations: souls.mutations,
			actions: souls.actions,
			getters: souls.getters
		},
		propulsionAndPower: {
			state: propulsionAndPower.state,
			mutations: propulsionAndPower.mutations,
			actions: propulsionAndPower.actions,
			getters: propulsionAndPower.getters
		},
		radioCoverages: {
			state: radioCoverages.state,
			mutations: radioCoverages.mutations,
			actions: radioCoverages.actions,
			getters: radioCoverages.getters
		},
		otherInfos: {
			state: otherInfos.state,
			mutations: otherInfos.mutations,
			actions: otherInfos.actions,
			getters: otherInfos.getters
		},
		levels: {
			state: levels.state,
			mutations: levels.mutations,
			actions: levels.actions,
			getters: levels.getters
		},
		compressor: {
			state: compressor.state,
			mutations: compressor.mutations,
			actions: compressor.actions,
			getters: compressor.getters
		},
		shipowners: {
			state: shipowners.state,
			mutations: shipowners.mutations,
			actions: shipowners.actions,
			getters: shipowners.getters
		},
		maskHelmet: {
			state: maskHelmet.state,
			mutations: maskHelmet.mutations,
			actions: maskHelmet.actions,
			getters: maskHelmet.getters
		},
		generalSystemItems: {
			state: generalSystemItems.state,
			mutations: generalSystemItems.mutations,
			actions: generalSystemItems.actions,
			getters: generalSystemItems.getters
		},
		compressedAirTank: {
			state: compressedAirTank.state,
			mutations: compressedAirTank.mutations,
			actions: compressedAirTank.actions,
			getters: compressedAirTank.getters
		},
		cylinderFrame: {
			state: cylinderFrame.state,
			mutations: cylinderFrame.mutations,
			actions: cylinderFrame.actions,
			getters: cylinderFrame.getters
		},
		comunicator: {
			state: comunicator.state,
			mutations: comunicator.mutations,
			actions: comunicator.actions,
			getters: comunicator.getters
		},
		umbilical: {
			state: umbilical.state,
			mutations: umbilical.mutations,
			actions: umbilical.actions,
			getters: umbilical.getters
		},
		emergencyCylinder: {
			state: emergencyCylinder.state,
			mutations: emergencyCylinder.mutations,
			actions: emergencyCylinder.actions,
			getters: emergencyCylinder.getters
		},
		controlPanel: {
			state: controlPanel.state,
			mutations: controlPanel.mutations,
			actions: controlPanel.actions,
			getters: controlPanel.getters
		},
		signet: {
			state: signet.state,
			mutations: signet.mutations,
			actions: signet.actions,
			getters: signet.getters
		},
		winch: {
			state: winch.state,
			mutations: winch.mutations,
			actions: winch.actions,
			getters: winch.getters
		},
		hyperbaricChamber: {
			state: hyperbaricChamber.state,
			mutations: hyperbaricChamber.mutations,
			actions: hyperbaricChamber.actions,
			getters: hyperbaricChamber.getters
		},
		basket: {
			state: basket.state,
			mutations: basket.mutations,
			actions: basket.actions,
			getters: basket.getters
		},
		portico: {
			state: portico.state,
			mutations: portico.mutations,
			actions: portico.actions,
			getters: portico.getters
		},
		company: {
			state: company.state,
			mutations: company.mutations,
			actions: company.actions,
			getters: company.getters
		},
		certification: {
			state: certification.state,
			mutations: certification.mutations,
			actions: certification.actions,
			getters: certification.getters
		},
		depthGauges: {
			state: depthGauges.state,
			mutations: depthGauges.mutations,
			actions: depthGauges.actions,
			getters: depthGauges.getters
		},
		loader: {
			state: loader.state,
			mutations: loader.mutations,
			actions: loader.actions
		}
	}
})
