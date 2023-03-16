import { FieldOptions } from 'src/types/form'

export const SITE_NAME = 'Savez Mailing'

const YesOrNoOptions = [
  {
    label: 'Sim',
    value: 'SIM'
  },
  {
    label: 'Não',
    value: 'NAO'
  }
]

export const MEI_OPTIONS: FieldOptions = YesOrNoOptions
export const SIMPLES_OPTIONS: FieldOptions = YesOrNoOptions

export const IMPORT_EXPORT_OPTIONS: FieldOptions = [
  {
    label: 'Importador',
    value: 'IMPORTA'
  },
  {
    label: 'Exportador',
    value: 'EXPORTA'
  }
]
export const COMPANY_TYPE_OPTIONS: FieldOptions = [
  {
    label: 'Microempresa (ME)',
    value: 'ME'
  },
  {
    label: 'Empresa de Pequeno Porte (EPP)',
    value: 'EPP'
  },
  {
    label: 'Demais',
    value: 'DEMAIS'
  }
]

export const COMPANY_SIZE_OPTIONS: FieldOptions = [
  {
    label: 'Matriz',
    value: 'H'
  },
  {
    label: 'Filial',
    value: 'B'
  },
  {
    label: 'Ambos',
    value: ''
  }
]

export const GENDER_OPTIONS: FieldOptions = [
  {
    label: 'Masculino',
    value: 'M'
  },
  {
    label: 'Feminino',
    value: 'F'
  },
  {
    label: 'Ambos',
    value: ''
  }
]

export const BRAZILIAN_MONTHS_OPTIONS: FieldOptions = [
  {
    value: '1',
    label: 'Janeiro'
  },
  {
    value: '2',
    label: 'Fevereiro'
  },
  {
    value: '3',
    label: 'Março'
  },
  {
    value: '4',
    label: 'Abril'
  },
  {
    value: '5',
    label: 'Maio'
  },
  {
    value: '6',
    label: 'Junho'
  },
  {
    value: '7',
    label: 'Julho'
  },
  {
    value: '8',
    label: 'Agosto'
  },
  {
    value: '9',
    label: 'Setembro'
  },
  {
    value: '10',
    label: 'Outubro'
  },
  {
    value: '11',
    label: 'Novembro'
  },
  {
    value: '12',
    label: 'Dezembro'
  }
]

export const CBO_OPTIONS: FieldOptions = [
  {
    value: '010105',
    label: 'Oficial general da aeron\u00e1utica'
  },
  {
    value: '010110',
    label: 'Oficial general do ex\u00e9rcito'
  },
  {
    value: '010115',
    label: 'Oficial general da marinha'
  },
  {
    value: '010215',
    label: 'Oficial da marinha'
  },
  {
    value: '010210',
    label: 'Oficial do ex\u00e9rcito'
  },
  {
    value: '010205',
    label: 'Oficial da aeron\u00e1utica'
  },
  {
    value: '010310',
    label: 'Pra\u00e7a do ex\u00e9rcito'
  },
  {
    value: '010315',
    label: 'Pra\u00e7a da marinha'
  },
  {
    value: '010305',
    label: 'Pra\u00e7a da aeron\u00e1utica'
  },
  {
    value: '020115',
    label: 'Major da pol\u00edcia militar'
  },
  {
    value: '020105',
    label: 'Coronel da pol\u00edcia militar'
  },
  {
    value: '020110',
    label: 'Tenente-coronel da pol\u00edcia militar'
  },
  {
    value: '020205',
    label: 'Capit\u00e3o da pol\u00edcia militar'
  },
  {
    value: '020305',
    label: 'Primeiro tenente de pol\u00edcia militar'
  },
  {
    value: '020310',
    label: 'Segundo tenente de pol\u00edcia militar'
  },
  {
    value: '021105',
    label: 'Subtenente da policia militar'
  },
  {
    value: '021110',
    label: 'Sargento da policia militar'
  },
  {
    value: '021205',
    label: 'Cabo da pol\u00edcia militar'
  },
  {
    value: '021210',
    label: 'Soldado da pol\u00edcia militar'
  },
  {
    value: '030115',
    label: 'Tenente-coronel bombeiro militar'
  },
  {
    value: '030105',
    label: 'Coronel bombeiro militar'
  },
  {
    value: '030110',
    label: 'Major bombeiro militar'
  },
  {
    value: '030205',
    label: 'Capit\u00e3o bombeiro militar'
  },
  {
    value: '030305',
    label: 'Tenente do corpo de bombeiros militar'
  },
  {
    value: '031105',
    label: 'Subtenente bombeiro militar'
  },
  {
    value: '031110',
    label: 'Sargento bombeiro militar'
  },
  {
    value: '031210',
    label: 'Soldado bombeiro militar'
  },
  {
    value: '031205',
    label: 'Cabo bombeiro militar'
  },
  {
    value: '111120',
    label: 'Vereador'
  },
  {
    value: '111115',
    label: 'Deputado estadual e distrital'
  },
  {
    value: '111110',
    label: 'Deputado federal'
  },
  {
    value: '111105',
    label: 'Senador'
  },
  {
    value: '111220',
    label: 'Secret\u00e1rio - executivo'
  },
  {
    value: '111215',
    label: 'Ministro de estado'
  },
  {
    value: '111255',
    label: 'Vice-prefeito'
  },
  {
    value: '111250',
    label: 'Prefeito'
  },
  {
    value: '111245',
    label: 'Vice-governador do distrito federal'
  },
  {
    value: '111205',
    label: 'Presidente da rep\u00fablica'
  },
  {
    value: '111225',
    label: 'Membro superior do poder executivo'
  },
  {
    value: '111230',
    label: 'Governador de estado'
  },
  {
    value: '111210',
    label: 'Vice-presidente da rep\u00fablica'
  },
  {
    value: '111240',
    label: 'Vice-governador de estado'
  },
  {
    value: '111235',
    label: 'Governador do distrito federal'
  },
  {
    value: '111345',
    label: 'Juiz do trabalho'
  },
  {
    value: '111340',
    label: 'Juiz auditor estadual - justi\u00e7a militar'
  },
  {
    value: '111335',
    label: 'Juiz auditor federal - justi\u00e7a militar'
  },
  {
    value: '111330',
    label: 'Juiz federal'
  },
  {
    value: '111325',
    label: 'Juiz de direito'
  },
  {
    value: '111320',
    label: 'Ministro do  superior tribunal do trabalho'
  },
  {
    value: '111310',
    label: 'Ministro do superior tribunal de justi\u00e7a'
  },
  {
    value: '111315',
    label: 'Ministro do  superior tribunal militar'
  },
  {
    value: '111305',
    label: 'Ministro do supremo tribunal federal'
  },
  {
    value: '111405',
    label: 'Dirigente do servi\u00e7o p\u00fablico federal'
  },
  {
    value: '111410',
    label: 'Dirigente do servi\u00e7o p\u00fablico estadual e distrital'
  },
  {
    value: '111415',
    label: 'Dirigente do servi\u00e7o p\u00fablico municipal'
  },
  {
    value: '111505',
    label: 'Especialista de pol\u00edticas p\u00fablicas e gest\u00e3o goverlabelntal - eppgg'
  },
  {
    value: '111510',
    label: 'Analista de planejamento e or\u00e7amento - apo'
  },
  {
    value: '113015',
    label: 'Membro de lideran\u00e7a quilombola'
  },
  {
    value: '113005',
    label: 'Cacique'
  },
  {
    value: '113010',
    label: 'L\u00edder de comunidade cai\u00e7ara'
  },
  {
    value: '114105',
    label: 'Dirigente de partido pol\u00edtico'
  },
  {
    value: '114210',
    label: 'Dirigentes de entidades patronais'
  },
  {
    value: '114205',
    label: 'Dirigentes de entidades de trabalhadores'
  },
  {
    value: '114305',
    label: 'Dirigente e administrador de organiza\u00e7\u00e3o religiosa'
  },
  {
    value: '114405',
    label: 'Dirigente e administrador de organiza\u00e7\u00e3o da sociedade civil sem fins lucrativos'
  },
  {
    value: '121005',
    label: 'Diretor de planejamento estrat\u00e9gico'
  },
  {
    value: '121010',
    label: 'Diretor geral de empresa e organiza\u00e7\u00f5es (exceto de interesse p\u00fablico)'
  },
  {
    value: '122120',
    label: 'Diretor de produ\u00e7\u00e3o e opera\u00e7\u00f5es em empresa pesqueira'
  },
  {
    value: '122115',
    label: 'Diretor de produ\u00e7\u00e3o e opera\u00e7\u00f5es em empresa florestal'
  },
  {
    value: '122105',
    label: 'Diretor de produ\u00e7\u00e3o e opera\u00e7\u00f5es em empresa agropecu\u00e1ria'
  },
  {
    value: '122110',
    label: 'Diretor de produ\u00e7\u00e3o e opera\u00e7\u00f5es em empresa aq\u00fc\u00edcola'
  },
  {
    value: '122205',
    label:
      'Diretor de produ\u00e7\u00e3o e opera\u00e7\u00f5es da ind\u00fastria de transforma\u00e7\u00e3o, extra\u00e7\u00e3o mineral e utilidades'
  },
  {
    value: '122305',
    label: 'Diretor de opera\u00e7\u00f5es de obras p\u00fablica e civil'
  },
  {
    value: '122405',
    label: 'Diretor de opera\u00e7\u00f5es comerciais (com\u00e9rcio atacadista e varejista)'
  },
  {
    value: '122515',
    label: 'Diretor de  produ\u00e7\u00e3o e opera\u00e7\u00f5es de turismo'
  },
  {
    value: '122520',
    label: 'Turism\u00f3logo'
  },
  {
    value: '122505',
    label: 'Diretor de  produ\u00e7\u00e3o e opera\u00e7\u00f5es de alimenta\u00e7\u00e3o'
  },
  {
    value: '122510',
    label: 'Diretor de  produ\u00e7\u00e3o e opera\u00e7\u00f5es de hotel'
  },
  {
    value: '122620',
    label: 'Diretor de opera\u00e7\u00f5es de servi\u00e7os de transporte'
  },
  {
    value: '122615',
    label: 'Diretor de opera\u00e7\u00f5es de servi\u00e7os de telecomunica\u00e7\u00f5es'
  },
  {
    value: '122605',
    label: 'Diretor de opera\u00e7\u00f5es de correios'
  },
  {
    value: '122610',
    label: 'Diretor de opera\u00e7\u00f5es de servi\u00e7os de armazelabelnto'
  },
  {
    value: '122705',
    label: 'Diretor comercial em opera\u00e7\u00f5es de intermedia\u00e7\u00e3o financeira'
  },
  {
    value: '122710',
    label: 'Diretor de produtos banc\u00e1rios'
  },
  {
    value: '122715',
    label: 'Diretor de cr\u00e9dito rural'
  },
  {
    value: '122720',
    label: 'Diretor de c\u00e2mbio e com\u00e9rcio exterior'
  },
  {
    value: '122725',
    label: 'Diretor de compliance'
  },
  {
    value: '122730',
    label: 'Diretor de cr\u00e9dito (exceto cr\u00e9dito imobili\u00e1rio)'
  },
  {
    value: '122735',
    label: 'Diretor de cr\u00e9dito imobili\u00e1rio'
  },
  {
    value: '122740',
    label: 'Diretor de leasing'
  },
  {
    value: '122745',
    label: 'Diretor de mercado de capitais'
  },
  {
    value: '122750',
    label:
      'Diretor de recupera\u00e7\u00e3o de cr\u00e9ditos em opera\u00e7\u00f5es de intermedia\u00e7\u00e3o financeira'
  },
  {
    value: '122755',
    label: 'Diretor de riscos de mercado'
  },
  {
    value: '123105',
    label: 'Diretor administrativo'
  },
  {
    value: '123110',
    label: 'Diretor administrativo e financeiro'
  },
  {
    value: '123115',
    label: 'Diretor financeiro'
  },
  {
    value: '123205',
    label: 'Diretor de recursos humanos'
  },
  {
    value: '123210',
    label: 'Diretor de rela\u00e7\u00f5es de trabalho'
  },
  {
    value: '123305',
    label: 'Diretor comercial'
  },
  {
    value: '123310',
    label: 'Diretor de marketing'
  },
  {
    value: '123405',
    label: 'Diretor de suprimentos'
  },
  {
    value: '123410',
    label: 'Diretor de suprimentos no servi\u00e7o p\u00fablico'
  },
  {
    value: '123605',
    label: 'Diretor de servi\u00e7os de inform\u00e1tica'
  },
  {
    value: '123705',
    label: 'Diretor de pesquisa e desenvolvimento (p&d)'
  },
  {
    value: '123805',
    label: 'Diretor de manuten\u00e7\u00e3o'
  },
  {
    value: '131105',
    label: 'Diretor de servi\u00e7os culturais'
  },
  {
    value: '131120',
    label: 'Gerente de servi\u00e7os sociais'
  },
  {
    value: '131115',
    label: 'Gerente de servi\u00e7os culturais'
  },
  {
    value: '131110',
    label: 'Diretor de servi\u00e7os sociais'
  },
  {
    value: '131205',
    label: 'Diretor de servi\u00e7os de sa\u00fade'
  },
  {
    value: '131210',
    label: 'Gerente de servi\u00e7os de sa\u00fade'
  },
  {
    value: '131215',
    label: 'Tecn\u00f3logo em gest\u00e3o hospitalar'
  },
  {
    value: '131225',
    label: 'Sanitarista'
  },
  {
    value: '131220',
    label: 'Geront\u00f3logo'
  },
  {
    value: '131320',
    label: 'Gerente de servi\u00e7os educacionais da \u00e1rea p\u00fablica'
  },
  {
    value: '131310',
    label: 'Diretor de institui\u00e7\u00e3o educacional p\u00fablica'
  },
  {
    value: '131315',
    label: 'Gerente de institui\u00e7\u00e3o educacional da \u00e1rea privada'
  },
  {
    value: '131305',
    label: 'Diretor de institui\u00e7\u00e3o educacional da \u00e1rea privada'
  },
  {
    value: '141105',
    label: 'Gerente de produ\u00e7\u00e3o e opera\u00e7\u00f5es  aq\u00fc\u00edcolas'
  },
  {
    value: '141120',
    label: 'Gerente de produ\u00e7\u00e3o e opera\u00e7\u00f5es pesqueiras'
  },
  {
    value: '141115',
    label: 'Gerente de produ\u00e7\u00e3o e opera\u00e7\u00f5es agropecu\u00e1rias'
  },
  {
    value: '141110',
    label: 'Gerente de produ\u00e7\u00e3o e opera\u00e7\u00f5es  florestais'
  },
  {
    value: '141205',
    label: 'Gerente de produ\u00e7\u00e3o e opera\u00e7\u00f5es'
  },
  {
    value: '141305',
    label: 'Gerente de produ\u00e7\u00e3o e opera\u00e7\u00f5es da constru\u00e7\u00e3o civil e obras p\u00fablicas'
  },
  {
    value: '141405',
    label: 'Comerciante atacadista'
  },
  {
    value: '141410',
    label: 'Comerciante varejista'
  },
  {
    value: '141415',
    label: 'Gerente de loja e supermercado'
  },
  {
    value: '141420',
    label: 'Gerente de opera\u00e7\u00f5es de servi\u00e7os de assist\u00eancia t\u00e9cnica'
  },
  {
    value: '141505',
    label: 'Gerente de hotel'
  },
  {
    value: '141525',
    label: 'Gerente de turismo'
  },
  {
    value: '141510',
    label: 'Gerente de restaurante'
  },
  {
    value: '141520',
    label: 'Gerente de pens\u00e3o'
  },
  {
    value: '141515',
    label: 'Gerente de bar'
  },
  {
    value: '141615',
    label: 'Gerente de log\u00edstica (armazenagem e distribui\u00e7\u00e3o)'
  },
  {
    value: '141605',
    label: 'Gerente de opera\u00e7\u00f5es de transportes'
  },
  {
    value: '141610',
    label: 'Gerente de opera\u00e7\u00f5es de correios e telecomunica\u00e7\u00f5es'
  },
  {
    value: '141720',
    label: 'Gerente de cr\u00e9dito e cobran\u00e7a'
  },
  {
    value: '141705',
    label: 'Gerente de produtos banc\u00e1rios'
  },
  {
    value: '141710',
    label: 'Gerente de ag\u00eancia'
  },
  {
    value: '141735',
    label: 'Gerente de recupera\u00e7\u00e3o de cr\u00e9dito'
  },
  {
    value: '141730',
    label: 'Gerente de cr\u00e9dito rural'
  },
  {
    value: '141725',
    label: 'Gerente de cr\u00e9dito imobili\u00e1rio'
  },
  {
    value: '141715',
    label: 'Gerente de c\u00e2mbio e com\u00e9rcio exterior'
  },
  {
    value: '142110',
    label: 'Gerente de riscos'
  },
  {
    value: '142120',
    label: 'Tecn\u00f3logo em gest\u00e3o administrativo- financeira'
  },
  {
    value: '142105',
    label: 'Gerente administrativo'
  },
  {
    value: '142115',
    label: 'Gerente financeiro'
  },
  {
    value: '142205',
    label: 'Gerente de recursos humanos'
  },
  {
    value: '142210',
    label: 'Gerente de departamento pessoal'
  },
  {
    value: '142330',
    label: 'Analista de neg\u00f3cios'
  },
  {
    value: '142325',
    label: 'Rela\u00e7\u00f5es p\u00fablicas'
  },
  {
    value: '142340',
    label: 'Ouvidor'
  },
  {
    value: '142335',
    label: 'Analista de pesquisa de mercado'
  },
  {
    value: '142320',
    label: 'Gerente de vendas'
  },
  {
    value: '142315',
    label: 'Gerente de marketing'
  },
  {
    value: '142310',
    label: 'Gerente de comunica\u00e7\u00e3o'
  },
  {
    value: '142305',
    label: 'Gerente comercial'
  },
  {
    value: '142415',
    label: 'Gerente de almoxarifado'
  },
  {
    value: '142405',
    label: 'Gerente de compras'
  },
  {
    value: '142410',
    label: 'Gerente de suprimentos'
  },
  {
    value: '142530',
    label: 'Gerente de suporte t\u00e9cnico de tecnologia da informa\u00e7\u00e3o'
  },
  {
    value: '142505',
    label: 'Gerente de rede'
  },
  {
    value: '142520',
    label: 'Gerente de projetos de tecnologia da informa\u00e7\u00e3o'
  },
  {
    value: '142515',
    label: 'Gerente de produ\u00e7\u00e3o de tecnologia da informa\u00e7\u00e3o'
  },
  {
    value: '142535',
    label: 'Tecn\u00f3logo em gest\u00e3o da tecnologia da informa\u00e7\u00e3o'
  },
  {
    value: '142525',
    label: 'Gerente de seguran\u00e7a de tecnologia da informa\u00e7\u00e3o'
  },
  {
    value: '142510',
    label: 'Gerente de desenvolvimento de sistemas'
  },
  {
    value: '142605',
    label: 'Gerente de pesquisa e desenvolvimento (p&d)'
  },
  {
    value: '142610',
    label: 'Especialista em desenvolvimento de cigarros'
  },
  {
    value: '142710',
    label: 'Tecn\u00f3logo em sistemas biom\u00e9dicos'
  },
  {
    value: '142705',
    label: 'Gerente de projetos e servi\u00e7os de manuten\u00e7\u00e3o'
  },
  {
    value: '201105',
    label: 'Bioengenheiro'
  },
  {
    value: '201110',
    label: 'Biotecnologista'
  },
  {
    value: '201115',
    label: 'Geneticista'
  },
  {
    value: '201220',
    label: 'Especialista em instrumenta\u00e7\u00e3o metrol\u00f3gica'
  },
  {
    value: '201215',
    label: 'Especialista em ensaios metrol\u00f3gicos'
  },
  {
    value: '201210',
    label: 'Especialista em calibra\u00e7\u00f5es metrol\u00f3gicas'
  },
  {
    value: '201225',
    label: 'Especialista em materiais de refer\u00eancia metrol\u00f3gica'
  },
  {
    value: '201205',
    label: 'Pesquisador em metrologia'
  },
  {
    value: '202115',
    label: 'Tecn\u00f3logo em mecatr\u00f4nica'
  },
  {
    value: '202120',
    label: 'Tecn\u00f3logo em automa\u00e7\u00e3o industrial'
  },
  {
    value: '202110',
    label: 'Engenheiro de controle e automa\u00e7\u00e3o'
  },
  {
    value: '202105',
    label: 'Engenheiro mecatr\u00f4nico'
  },
  {
    value: '203005',
    label: 'Pesquisador em biologia ambiental'
  },
  {
    value: '203010',
    label: 'Pesquisador em biologia animal'
  },
  {
    value: '203015',
    label: 'Pesquisador em biologia de microorganismos e parasitas'
  },
  {
    value: '203020',
    label: 'Pesquisador em biologia humana'
  },
  {
    value: '203025',
    label: 'Pesquisador em biologia vegetal'
  },
  {
    value: '203115',
    label: 'Pesquisador em f\u00edsica'
  },
  {
    value: '203110',
    label: 'Pesquisador em ci\u00eancias da terra e meio ambiente'
  },
  {
    value: '203105',
    label: 'Pesquisador em ci\u00eancias da computa\u00e7\u00e3o e inform\u00e1tica'
  },
  {
    value: '203120',
    label: 'Pesquisador em matem\u00e1tica'
  },
  {
    value: '203125',
    label: 'Pesquisador em qu\u00edmica'
  },
  {
    value: '203215',
    label: 'Pesquisador de engenharia el\u00e9trica e eletr\u00f4nica'
  },
  {
    value: '203210',
    label: 'Pesquisador de engenharia e tecnologia (outras \u00e1reas da engenharia)'
  },
  {
    value: '203205',
    label: 'Pesquisador de engenharia civil'
  },
  {
    value: '203220',
    label: 'Pesquisador de engenharia mec\u00e2nica'
  },
  {
    value: '203225',
    label: 'Pesquisador de engenharia metal\u00fargica, de minas e de materiais'
  },
  {
    value: '203230',
    label: 'Pesquisador de engenharia qu\u00edmica'
  },
  {
    value: '203315',
    label: 'Pesquisador em medicina veterin\u00e1ria'
  },
  {
    value: '203310',
    label: 'Pesquisador de medicina b\u00e1sica'
  },
  {
    value: '203305',
    label: 'Pesquisador de cl\u00ednica m\u00e9dica'
  },
  {
    value: '203320',
    label: 'Pesquisador em sa\u00fade coletiva'
  },
  {
    value: '203405',
    label: 'Pesquisador em ci\u00eancias agron\u00f4micas'
  },
  {
    value: '203410',
    label: 'Pesquisador em ci\u00eancias da pesca e aq\u00fcicultura'
  },
  {
    value: '203415',
    label: 'Pesquisador em ci\u00eancias da zootecnia'
  },
  {
    value: '203420',
    label: 'Pesquisador em ci\u00eancias florestais'
  },
  {
    value: '203505',
    label: 'Pesquisador em ci\u00eancias sociais e humanas'
  },
  {
    value: '203510',
    label: 'Pesquisador em economia'
  },
  {
    value: '203515',
    label: 'Pesquisador em ci\u00eancias da educa\u00e7\u00e3o'
  },
  {
    value: '203520',
    label: 'Pesquisador em hist\u00f3ria'
  },
  {
    value: '203525',
    label: 'Pesquisador em psicologia'
  },
  {
    value: '204105',
    label: 'Perito criminal'
  },
  {
    value: '211120',
    label: 'Matem\u00e1tico aplicado'
  },
  {
    value: '211105',
    label: 'Atu\u00e1rio'
  },
  {
    value: '211110',
    label: 'Especialista em pesquisa operacional'
  },
  {
    value: '211115',
    label: 'Matem\u00e1tico'
  },
  {
    value: '211215',
    label: 'Estat\u00edstico te\u00f3rico'
  },
  {
    value: '211205',
    label: 'Estat\u00edstico'
  },
  {
    value: '211210',
    label: 'Estat\u00edstico (estat\u00edstica aplicada)'
  },
  {
    value: '212210',
    label: 'Engenheiro de equipamentos em computa\u00e7\u00e3o'
  },
  {
    value: '212205',
    label: 'Engenheiro de aplicativos em computa\u00e7\u00e3o'
  },
  {
    value: '212215',
    label: 'Engenheiros de sistemas operacionais em computa\u00e7\u00e3o'
  },
  {
    value: '212320',
    label: 'Administrador em seguran\u00e7a da informa\u00e7\u00e3o'
  },
  {
    value: '212310',
    label: 'Administrador de redes'
  },
  {
    value: '212305',
    label: 'Administrador de banco de dados'
  },
  {
    value: '212315',
    label: 'Administrador de sistemas operacionais'
  },
  {
    value: '212415',
    label: 'Analista de sistemas de automa\u00e7\u00e3o'
  },
  {
    value: '212420',
    label: 'Analista de suporte computacional'
  },
  {
    value: '212410',
    label: 'Analista de redes e de comunica\u00e7\u00e3o de dados'
  },
  {
    value: '212405',
    label: 'Analista de desenvolvimento de sistemas'
  },
  {
    value: '213110',
    label: 'F\u00edsico (ac\u00fastica)'
  },
  {
    value: '213170',
    label: 'F\u00edsico (plasma)'
  },
  {
    value: '213175',
    label: 'F\u00edsico (t\u00e9rmica)'
  },
  {
    value: '213165',
    label: 'F\u00edsico (part\u00edculas e campos)'
  },
  {
    value: '213160',
    label: 'F\u00edsico (\u00f3ptica)'
  },
  {
    value: '213155',
    label: 'F\u00edsico (nuclear e reatores)'
  },
  {
    value: '213150',
    label: 'F\u00edsico (medicina)'
  },
  {
    value: '213145',
    label: 'F\u00edsico (materiais)'
  },
  {
    value: '213125',
    label: 'F\u00edsico (estat\u00edstica e matem\u00e1tica)'
  },
  {
    value: '213140',
    label: 'F\u00edsico (mat\u00e9ria condensada)'
  },
  {
    value: '213105',
    label: 'F\u00edsico'
  },
  {
    value: '213115',
    label: 'F\u00edsico (at\u00f4mica e molecular)'
  },
  {
    value: '213120',
    label: 'F\u00edsico (cosmologia)'
  },
  {
    value: '213130',
    label: 'F\u00edsico (fluidos)'
  },
  {
    value: '213135',
    label: 'F\u00edsico (instrumenta\u00e7\u00e3o)'
  },
  {
    value: '213215',
    label: 'Tecn\u00f3logo em processos qu\u00edmicos'
  },
  {
    value: '213210',
    label: 'Qu\u00edmico industrial'
  },
  {
    value: '213205',
    label: 'Qu\u00edmico'
  },
  {
    value: '213305',
    label: 'Astr\u00f4nomo'
  },
  {
    value: '213315',
    label: 'Meteorologista'
  },
  {
    value: '213310',
    label: 'Geof\u00edsico espacial'
  },
  {
    value: '213440',
    label: 'Ocean\u00f3grafo'
  },
  {
    value: '213425',
    label: 'Hidroge\u00f3logo'
  },
  {
    value: '213420',
    label: 'Geoqu\u00edmico'
  },
  {
    value: '213415',
    label: 'Geof\u00edsico'
  },
  {
    value: '213410',
    label: 'Ge\u00f3logo de engenharia'
  },
  {
    value: '213435',
    label: 'Petr\u00f3grafo'
  },
  {
    value: '213430',
    label: 'Paleont\u00f3logo'
  },
  {
    value: '213405',
    label: 'Ge\u00f3logo'
  },
  {
    value: '214010',
    label: 'Tecn\u00f3logo em meio ambiente'
  },
  {
    value: '214005',
    label: 'Engenheiro ambiental'
  },
  {
    value: '214105',
    label: 'Arquiteto de edifica\u00e7\u00f5es'
  },
  {
    value: '214120',
    label: 'Arquiteto paisagista'
  },
  {
    value: '214115',
    label: 'Arquiteto de patrim\u00f4nio'
  },
  {
    value: '214110',
    label: 'Arquiteto de interiores'
  },
  {
    value: '214130',
    label: 'Urbanista'
  },
  {
    value: '214125',
    label: 'Arquiteto urbanista'
  },
  {
    value: '214205',
    label: 'Engenheiro civil'
  },
  {
    value: '214210',
    label: 'Engenheiro civil (aeroportos)'
  },
  {
    value: '214215',
    label: 'Engenheiro civil (edifica\u00e7\u00f5es)'
  },
  {
    value: '214220',
    label: 'Engenheiro civil (estruturas met\u00e1licas)'
  },
  {
    value: '214225',
    label: 'Engenheiro civil (ferrovias e metrovias)'
  },
  {
    value: '214230',
    label: 'Engenheiro civil (geot\u00e9cnia)'
  },
  {
    value: '214235',
    label: 'Engenheiro civil (hidrologia)'
  },
  {
    value: '214240',
    label: 'Engenheiro civil (hidr\u00e1ulica)'
  },
  {
    value: '214245',
    label: 'Engenheiro civil (pontes e viadutos)'
  },
  {
    value: '214250',
    label: 'Engenheiro civil (portos e vias naveg\u00e1veis)'
  },
  {
    value: '214255',
    label: 'Engenheiro civil (rodovias)'
  },
  {
    value: '214260',
    label: 'Engenheiro civil (saneamento)'
  },
  {
    value: '214265',
    label: 'Engenheiro civil (t\u00faneis)'
  },
  {
    value: '214270',
    label: 'Engenheiro civil (transportes e tr\u00e2nsito)'
  },
  {
    value: '214280',
    label: 'Tecn\u00f3logo em constru\u00e7\u00e3o civil'
  },
  {
    value: '214330',
    label: 'Engenheiro eletr\u00f4nico de projetos'
  },
  {
    value: '214315',
    label: 'Engenheiro eletricista de manuten\u00e7\u00e3o'
  },
  {
    value: '214320',
    label: 'Engenheiro eletricista de projetos'
  },
  {
    value: '214325',
    label: 'Engenheiro eletr\u00f4nico de manuten\u00e7\u00e3o'
  },
  {
    value: '214335',
    label: 'Engenheiro de manuten\u00e7\u00e3o de telecomunica\u00e7\u00f5es'
  },
  {
    value: '214340',
    label: 'Engenheiro de telecomunica\u00e7\u00f5es'
  },
  {
    value: '214345',
    label: 'Engenheiro projetista de telecomunica\u00e7\u00f5es'
  },
  {
    value: '214350',
    label: 'Engenheiro de redes de comunica\u00e7\u00e3o'
  },
  {
    value: '214360',
    label: 'Tecn\u00f3logo em eletricidade'
  },
  {
    value: '214365',
    label: 'Tecn\u00f3logo em eletr\u00f4nica'
  },
  {
    value: '214310',
    label: 'Engenheiro eletr\u00f4nico'
  },
  {
    value: '214305',
    label: 'Engenheiro eletricista'
  },
  {
    value: '214370',
    label: 'Tecn\u00f3logo em telecomunica\u00e7\u00f5es'
  },
  {
    value: '214425',
    label: 'Engenheiro aeron\u00e1utico'
  },
  {
    value: '214420',
    label: 'Engenheiro mec\u00e2nico industrial'
  },
  {
    value: '214415',
    label: 'Engenheiro mec\u00e2nico (energia nuclear)'
  },
  {
    value: '214410',
    label: 'Engenheiro mec\u00e2nico automotivo'
  },
  {
    value: '214405',
    label: 'Engenheiro mec\u00e2nico'
  },
  {
    value: '214430',
    label: 'Engenheiro naval'
  },
  {
    value: '214435',
    label: 'Tecn\u00f3logo em fabrica\u00e7\u00e3o mec\u00e2nica'
  },
  {
    value: '214535',
    label: 'Tecn\u00f3logo em produ\u00e7\u00e3o sulcroalcooleira'
  },
  {
    value: '214520',
    label: 'Engenheiro qu\u00edmico (papel e celulose)'
  },
  {
    value: '214525',
    label: 'Engenheiro qu\u00edmico (petr\u00f3leo e borracha)'
  },
  {
    value: '214530',
    label: 'Engenheiro qu\u00edmico (utilidades e meio ambiente)'
  },
  {
    value: '214515',
    label: 'Engenheiro qu\u00edmico (minera\u00e7\u00e3o, metalurgia, siderurgia, cimenteira e cer\u00e2mica)'
  },
  {
    value: '214510',
    label: 'Engenheiro qu\u00edmico (ind\u00fastria qu\u00edmica)'
  },
  {
    value: '214505',
    label: 'Engenheiro qu\u00edmico'
  },
  {
    value: '214605',
    label: 'Engenheiro de materiais'
  },
  {
    value: '214615',
    label: 'Tecn\u00f3logo em metalurgia'
  },
  {
    value: '214610',
    label: 'Engenheiro metalurgista'
  },
  {
    value: '214730',
    label: 'Engenheiro de minas (planejamento)'
  },
  {
    value: '214735',
    label: 'Engenheiro de minas (processo)'
  },
  {
    value: '214750',
    label: 'Tecn\u00f3logo em rochas orlabelntais'
  },
  {
    value: '214745',
    label: 'Tecn\u00f3logo em petr\u00f3leo e g\u00e1s'
  },
  {
    value: '214740',
    label: 'Engenheiro de minas (projeto)'
  },
  {
    value: '214705',
    label: 'Engenheiro de minas'
  },
  {
    value: '214710',
    label: 'Engenheiro de minas (beneficiamento)'
  },
  {
    value: '214715',
    label: 'Engenheiro de minas (lavra a c\u00e9u aberto)'
  },
  {
    value: '214720',
    label: 'Engenheiro de minas (lavra subterr\u00e2nea)'
  },
  {
    value: '214725',
    label: 'Engenheiro de minas (pesquisa mineral)'
  },
  {
    value: '214810',
    label: 'Engenheiro cart\u00f3grafo'
  },
  {
    value: '214805',
    label: 'Engenheiro agrimensor'
  },
  {
    value: '214935',
    label: 'Tecn\u00f3logo em seguran\u00e7a do trabalho'
  },
  {
    value: '214930',
    label: 'Tecn\u00f3logo em produ\u00e7\u00e3o industrial'
  },
  {
    value: '214925',
    label: 'Engenheiro de tempos e movimentos'
  },
  {
    value: '214905',
    label: 'Engenheiro de produ\u00e7\u00e3o'
  },
  {
    value: '214910',
    label: 'Engenheiro de controle de qualidade'
  },
  {
    value: '214940',
    label: 'Higienista ocupacional'
  },
  {
    value: '214920',
    label: 'Engenheiro de riscos'
  },
  {
    value: '214915',
    label: 'Engenheiro de seguran\u00e7a do trabalho'
  },
  {
    value: '215105',
    label: 'Agente de manobra e docagem'
  },
  {
    value: '215110',
    label: 'Capit\u00e3o de manobra da marinha mercante'
  },
  {
    value: '215150',
    label: 'Vistoriador naval'
  },
  {
    value: '215145',
    label: 'Pr\u00e1tico de portos da marinha mercante'
  },
  {
    value: '215140',
    label: 'Oficial de quarto de navega\u00e7\u00e3o da marinha mercante'
  },
  {
    value: '215135',
    label: 'Inspetor naval'
  },
  {
    value: '215130',
    label: 'Inspetor de terminal'
  },
  {
    value: '215125',
    label: 'Imediato da marinha mercante'
  },
  {
    value: '215115',
    label: 'Comandante da marinha mercante'
  },
  {
    value: '215120',
    label: 'Coordenador de opera\u00e7\u00f5es de combate \u00e0 polui\u00e7\u00e3o no meio aquavi\u00e1rio'
  },
  {
    value: '215220',
    label: 'Superintendente t\u00e9cnico no transporte aquavi\u00e1rio'
  },
  {
    value: '215215',
    label: 'Segundo oficial de m\u00e1quinas da marinha mercante'
  },
  {
    value: '215210',
    label: 'Primeiro oficial de m\u00e1quinas da marinha mercante'
  },
  {
    value: '215205',
    label: 'Oficial superior de m\u00e1quinas da marinha mercante'
  },
  {
    value: '215310',
    label: 'Piloto de ensaios em v\u00f4o'
  },
  {
    value: '215305',
    label: 'Piloto de aeronaves'
  },
  {
    value: '215315',
    label: 'Instrutor de v\u00f4o'
  },
  {
    value: '221105',
    label: 'Bi\u00f3logo'
  },
  {
    value: '221205',
    label: 'Biom\u00e9dico'
  },
  {
    value: '222105',
    label: 'Engenheiro agr\u00edcola'
  },
  {
    value: '222110',
    label: 'Engenheiro agr\u00f4nomo'
  },
  {
    value: '222115',
    label: 'Engenheiro de pesca'
  },
  {
    value: '222120',
    label: 'Engenheiro florestal'
  },
  {
    value: '222205',
    label: 'Engenheiro de alimentos'
  },
  {
    value: '222215',
    label: 'Tecn\u00f3logo em alimentos'
  },
  {
    value: '223264',
    label: 'Cirurgi\u00e3o dentista - reabilitador oral'
  },
  {
    value: '223268',
    label: 'Cirurgi\u00e3o dentista - traumatologista bucomaxilofacial'
  },
  {
    value: '223272',
    label: 'Cirurgi\u00e3o dentista de sa\u00fade coletiva'
  },
  {
    value: '223276',
    label: 'Cirurgi\u00e3o dentista - odontologia do trabalho'
  },
  {
    value: '223280',
    label: 'Cirurgi\u00e3o dentista - dent\u00edstica'
  },
  {
    value: '223284',
    label: 'Cirurgi\u00e3o dentista - disfun\u00e7\u00e3o temporomandibular e dor orofacial'
  },
  {
    value: '223288',
    label: 'Cirurgi\u00e3o dentista - odontologia para pacientes com necessidades especiais'
  },
  {
    value: '223293',
    label: 'Cirurgi\u00e3o-dentista da estrat\u00e9gia de sa\u00fade da fam\u00edlia'
  },
  {
    value: '223260',
    label: 'Cirurgi\u00e3o dentista - radiologista'
  },
  {
    value: '223256',
    label: 'Cirurgi\u00e3o dentista - protesista'
  },
  {
    value: '223252',
    label: 'Cirurgi\u00e3o dentista - protesi\u00f3logo bucomaxilofacial'
  },
  {
    value: '223248',
    label: 'Cirurgi\u00e3o dentista - periodontista'
  },
  {
    value: '223244',
    label: 'Cirurgi\u00e3o dentista - patologista bucal'
  },
  {
    value: '223240',
    label: 'Cirurgi\u00e3o dentista - ortopedista e ortodontista'
  },
  {
    value: '223236',
    label: 'Cirurgi\u00e3o dentista - odontopediatra'
  },
  {
    value: '223228',
    label: 'Cirurgi\u00e3o dentista - odontogeriatra'
  },
  {
    value: '223232',
    label: 'Cirurgi\u00e3o dentista - odontologista legal'
  },
  {
    value: '223224',
    label: 'Cirurgi\u00e3o dentista - implantodontista'
  },
  {
    value: '223220',
    label: 'Cirurgi\u00e3o dentista - estomatologista'
  },
  {
    value: '223216',
    label: 'Cirurgi\u00e3o dentista - epidemiologista'
  },
  {
    value: '223212',
    label: 'Cirurgi\u00e3o dentista - endodontista'
  },
  {
    value: '223208',
    label: 'Cirurgi\u00e3o dentista - cl\u00ednico geral'
  },
  {
    value: '223204',
    label: 'Cirurgi\u00e3o dentista - auditor'
  },
  {
    value: '223305',
    label: 'M\u00e9dico veterin\u00e1rio'
  },
  {
    value: '223310',
    label: 'Zootecnista'
  },
  {
    value: '223415',
    label: 'Farmac\u00eautico analista cl\u00ednico'
  },
  {
    value: '223405',
    label: 'Farmac\u00eautico'
  },
  {
    value: '223440',
    label: 'Farmac\u00eautico toxicologista'
  },
  {
    value: '223435',
    label: 'Farmac\u00eautico industrial'
  },
  {
    value: '223445',
    label: 'Farmac\u00eautico hospitalar e cl\u00ednico'
  },
  {
    value: '223425',
    label: 'Farmac\u00eautico pr\u00e1ticas integrativas e complementares'
  },
  {
    value: '223430',
    label: 'Farmac\u00eautico em sa\u00fade p\u00fablica'
  },
  {
    value: '223420',
    label: 'Farmac\u00eautico de alimentos'
  },
  {
    value: '223555',
    label: 'Enfermeiro puericultor e pedi\u00e1trico'
  },
  {
    value: '223560',
    label: 'Enfermeiro sanitarista'
  },
  {
    value: '223565',
    label: 'Enfermeiro da estrat\u00e9gia de sa\u00fade da fam\u00edlia'
  },
  {
    value: '223550',
    label: 'Enfermeiro psiqui\u00e1trico'
  },
  {
    value: '223545',
    label: 'Enfermeiro obst\u00e9trico'
  },
  {
    value: '223540',
    label: 'Enfermeiro neonatologista'
  },
  {
    value: '223535',
    label: 'Enfermeiro nefrologista'
  },
  {
    value: '223530',
    label: 'Enfermeiro do trabalho'
  },
  {
    value: '223525',
    label: 'Enfermeiro de terapia intensiva'
  },
  {
    value: '223520',
    label: 'Enfermeiro de centro cir\u00fargico'
  },
  {
    value: '223570',
    label: 'Perfusionista'
  },
  {
    value: '223505',
    label: 'Enfermeiro'
  },
  {
    value: '223515',
    label: 'Enfermeiro de bordo'
  },
  {
    value: '223510',
    label: 'Enfermeiro auditor'
  },
  {
    value: '223655',
    label: 'Fisioterapeuta esportivo'
  },
  {
    value: '223660',
    label: 'Fisioterapeuta  do trabalho'
  },
  {
    value: '223645',
    label: 'Fisioterapeuta quiropraxista'
  },
  {
    value: '223640',
    label: 'Fisioterapeuta osteopata'
  },
  {
    value: '223635',
    label: 'Fisioterapeuta traumato-ortop\u00e9dica funcional'
  },
  {
    value: '223630',
    label: 'Fisioterapeuta neurofuncional'
  },
  {
    value: '223650',
    label: 'Fisioterapeuta acupunturista'
  },
  {
    value: '223625',
    label: 'Fisioterapeuta respirat\u00f3ria'
  },
  {
    value: '223605',
    label: 'Fisioterapeuta geral'
  },
  {
    value: '223705',
    label: 'Dietista'
  },
  {
    value: '223710',
    label: 'Nutricionista'
  },
  {
    value: '223810',
    label: 'Fonoaudi\u00f3logo geral'
  },
  {
    value: '223825',
    label: 'Fonoaudi\u00f3logo em disfagia'
  },
  {
    value: '223830',
    label: 'Fonoaudi\u00f3logo em linguagem'
  },
  {
    value: '223835',
    label: 'Fonoaudi\u00f3logo em motricidade orofacial'
  },
  {
    value: '223820',
    label: 'Fonoaudi\u00f3logo em audiologia'
  },
  {
    value: '223845',
    label: 'Fonoaudi\u00f3logo em voz'
  },
  {
    value: '223840',
    label: 'Fonoaudi\u00f3logo em sa\u00fade coletiva'
  },
  {
    value: '223815',
    label: 'Fonoaudi\u00f3logo educacional'
  },
  {
    value: '223910',
    label: 'Ortoptista'
  },
  {
    value: '223905',
    label: 'Terapeuta ocupacional'
  },
  {
    value: '224110',
    label: 'Ludomotricista'
  },
  {
    value: '224115',
    label: 'Preparador de atleta'
  },
  {
    value: '224120',
    label: 'Preparador f\u00edsico'
  },
  {
    value: '224105',
    label: 'Avaliador f\u00edsico'
  },
  {
    value: '224130',
    label: 'T\u00e9cnico de laborat\u00f3rio e fiscaliza\u00e7\u00e3o desportiva'
  },
  {
    value: '224135',
    label: 'Treinador profissional de futebol'
  },
  {
    value: '224125',
    label: 'T\u00e9cnico de desporto individual e coletivo (exceto futebol)'
  },
  {
    value: '225118',
    label: 'M\u00e9dico nutrologista'
  },
  {
    value: '225185',
    label: 'M\u00e9dico hematologista'
  },
  {
    value: '225180',
    label: 'M\u00e9dico geriatra'
  },
  {
    value: '225175',
    label: 'M\u00e9dico geneticista'
  },
  {
    value: '225170',
    label: 'M\u00e9dico generalista'
  },
  {
    value: '225165',
    label: 'M\u00e9dico gastroenterologista'
  },
  {
    value: '225160',
    label: 'M\u00e9dico fisiatra'
  },
  {
    value: '225155',
    label: 'M\u00e9dico endocrinologista e metabologista'
  },
  {
    value: '225154',
    label: 'M\u00e9dico antropos\u00f3fico'
  },
  {
    value: '225151',
    label: 'M\u00e9dico anestesiologista'
  },
  {
    value: '225150',
    label: 'M\u00e9dico em medicina intensiva'
  },
  {
    value: '225148',
    label: 'M\u00e9dico anatomopatologista'
  },
  {
    value: '225145',
    label: 'M\u00e9dico em medicina de tr\u00e1fego'
  },
  {
    value: '225142',
    label: 'M\u00e9dico da estrat\u00e9gia de sa\u00fade da fam\u00edlia'
  },
  {
    value: '225140',
    label: 'M\u00e9dico do trabalho'
  },
  {
    value: '225139',
    label: 'M\u00e9dico sanitarista'
  },
  {
    value: '225136',
    label: 'M\u00e9dico reumatologista'
  },
  {
    value: '225135',
    label: 'M\u00e9dico dermatologista'
  },
  {
    value: '225103',
    label: 'M\u00e9dico infectologista'
  },
  {
    value: '225105',
    label: 'M\u00e9dico acupunturista'
  },
  {
    value: '225106',
    label: 'M\u00e9dico legista'
  },
  {
    value: '225109',
    label: 'M\u00e9dico nefrologista'
  },
  {
    value: '225110',
    label: 'M\u00e9dico alergista e imunologista'
  },
  {
    value: '225112',
    label: 'M\u00e9dico neurologista'
  },
  {
    value: '225115',
    label: 'M\u00e9dico angiologista'
  },
  {
    value: '225195',
    label: 'M\u00e9dico homeopata'
  },
  {
    value: '225120',
    label: 'M\u00e9dico cardiologista'
  },
  {
    value: '225121',
    label: 'M\u00e9dico oncologista cl\u00ednico'
  },
  {
    value: '225122',
    label: 'M\u00e9dico cancerologista pedi\u00e1trico'
  },
  {
    value: '225124',
    label: 'M\u00e9dico pediatra'
  },
  {
    value: '225125',
    label: 'M\u00e9dico cl\u00ednico'
  },
  {
    value: '225127',
    label: 'M\u00e9dico pneumologista'
  },
  {
    value: '225130',
    label: 'M\u00e9dico de fam\u00edlia e comunidade'
  },
  {
    value: '225133',
    label: 'M\u00e9dico psiquiatra'
  },
  {
    value: '225220',
    label: 'M\u00e9dico cirurgi\u00e3o do aparelho digestivo'
  },
  {
    value: '225225',
    label: 'M\u00e9dico cirurgi\u00e3o geral'
  },
  {
    value: '225210',
    label: 'M\u00e9dico cirurgi\u00e3o cardiovascular'
  },
  {
    value: '225203',
    label: 'M\u00e9dico em cirurgia vascular'
  },
  {
    value: '225295',
    label: 'M\u00e9dico cirurgi\u00e3o da m\u00e3o'
  },
  {
    value: '225290',
    label: 'M\u00e9dico cancerologista cirurg\u00edco'
  },
  {
    value: '225285',
    label: 'M\u00e9dico urologista'
  },
  {
    value: '225280',
    label: 'M\u00e9dico coloproctologista'
  },
  {
    value: '225275',
    label: 'M\u00e9dico otorrinolaringologista'
  },
  {
    value: '225270',
    label: 'M\u00e9dico ortopedista e traumatologista'
  },
  {
    value: '225265',
    label: 'M\u00e9dico oftalmologista'
  },
  {
    value: '225260',
    label: 'M\u00e9dico neurocirurgi\u00e3o'
  },
  {
    value: '225255',
    label: 'M\u00e9dico mastologista'
  },
  {
    value: '225250',
    label: 'M\u00e9dico ginecologista e obstetra'
  },
  {
    value: '225240',
    label: 'M\u00e9dico cirurgi\u00e3o tor\u00e1cico'
  },
  {
    value: '225235',
    label: 'M\u00e9dico cirurgi\u00e3o pl\u00e1stico'
  },
  {
    value: '225230',
    label: 'M\u00e9dico cirurgi\u00e3o pedi\u00e1trico'
  },
  {
    value: '225215',
    label: 'M\u00e9dico cirurgi\u00e3o de cabe\u00e7a e pesco\u00e7o'
  },
  {
    value: '225305',
    label: 'M\u00e9dico citopatologista'
  },
  {
    value: '225310',
    label: 'M\u00e9dico em endoscopia'
  },
  {
    value: '225315',
    label: 'M\u00e9dico em medicina nuclear'
  },
  {
    value: '225320',
    label: 'M\u00e9dico em radiologia e diagn\u00f3stico por imagem'
  },
  {
    value: '225325',
    label: 'M\u00e9dico patologista'
  },
  {
    value: '225330',
    label: 'M\u00e9dico radioterapeuta'
  },
  {
    value: '225335',
    label: 'M\u00e9dico patologista cl\u00ednico / medicina laboratorial'
  },
  {
    value: '225340',
    label: 'M\u00e9dico hemoterapeuta'
  },
  {
    value: '225345',
    label: 'M\u00e9dico hiperbarista'
  },
  {
    value: '225350',
    label: 'M\u00e9dico neurofisiologista cl\u00ednico'
  },
  {
    value: '226105',
    label: 'Quiropraxista'
  },
  {
    value: '226110',
    label: 'Osteopata'
  },
  {
    value: '226315',
    label: 'Equoterapeuta'
  },
  {
    value: '226305',
    label: 'Musicoterapeuta'
  },
  {
    value: '226320',
    label: 'Natur\u00f3logo'
  },
  {
    value: '226310',
    label: 'Arteterapeuta'
  },
  {
    value: '231110',
    label: 'Professor de n\u00edvel superior na educa\u00e7\u00e3o infantil (zero a tr\u00eas anos)'
  },
  {
    value: '231105',
    label: 'Professor de n\u00edvel superior na educa\u00e7\u00e3o infantil (quatro a seis anos)'
  },
  {
    value: '231205',
    label: 'Professor da  educa\u00e7\u00e3o de jovens e adultos do ensino fundamental (primeira a quarta s\u00e9rie)'
  },
  {
    value: '231210',
    label: 'Professor de n\u00edvel superior do ensino fundamental (primeira a quarta s\u00e9rie)'
  },
  {
    value: '231320',
    label: 'Professor de geografia do ensino fundamental'
  },
  {
    value: '231325',
    label: 'Professor de hist\u00f3ria do ensino fundamental'
  },
  {
    value: '231330',
    label: 'Professor de l\u00edngua estrangeira moderna do ensino fundamental'
  },
  {
    value: '231315',
    label: 'Professor de educa\u00e7\u00e3o f\u00edsica do ensino fundamental'
  },
  {
    value: '231310',
    label: 'Professor de educa\u00e7\u00e3o art\u00edstica do ensino fundamental'
  },
  {
    value: '231335',
    label: 'Professor de l\u00edngua portuguesa do ensino fundamental'
  },
  {
    value: '231340',
    label: 'Professor de matem\u00e1tica do ensino fundamental'
  },
  {
    value: '231305',
    label: 'Professor de ci\u00eancias exatas e naturais do ensino fundamental'
  },
  {
    value: '232105',
    label: 'Professor de artes no ensino m\u00e9dio'
  },
  {
    value: '232120',
    label: 'Professor de educa\u00e7\u00e3o f\u00edsica no ensino m\u00e9dio'
  },
  {
    value: '232125',
    label: 'Professor de filosofia no ensino m\u00e9dio'
  },
  {
    value: '232130',
    label: 'Professor de f\u00edsica no ensino m\u00e9dio'
  },
  {
    value: '232135',
    label: 'Professor de geografia no ensino m\u00e9dio'
  },
  {
    value: '232145',
    label: 'Professor de l\u00edngua e literatura brasileira no ensino m\u00e9dio'
  },
  {
    value: '232165',
    label: 'Professor de qu\u00edmica no ensino m\u00e9dio'
  },
  {
    value: '232170',
    label: 'Professor de sociologia no ensino m\u00e9dio'
  },
  {
    value: '232110',
    label: 'Professor de biologia no ensino m\u00e9dio'
  },
  {
    value: '232115',
    label: 'Professor de disciplinas pedag\u00f3gicas no ensino m\u00e9dio'
  },
  {
    value: '232140',
    label: 'Professor de hist\u00f3ria no ensino m\u00e9dio'
  },
  {
    value: '232150',
    label: 'Professor de l\u00edngua estrangeira moderna no ensino m\u00e9dio'
  },
  {
    value: '232160',
    label: 'Professor de psicologia no ensino m\u00e9dio'
  },
  {
    value: '232155',
    label: 'Professor de matem\u00e1tica no ensino m\u00e9dio'
  },
  {
    value: '233105',
    label: 'Professor da \u00e1rea de meio ambiente'
  },
  {
    value: '233110',
    label: 'Professor de desenho t\u00e9cnico'
  },
  {
    value: '233115',
    label: 'Professor de t\u00e9cnicas agr\u00edcolas'
  },
  {
    value: '233120',
    label: 'Professor de t\u00e9cnicas comerciais e secretariais'
  },
  {
    value: '233125',
    label: 'Professor de t\u00e9cnicas de enfermagem'
  },
  {
    value: '233130',
    label: 'Professor de t\u00e9cnicas industriais'
  },
  {
    value: '233135',
    label: 'Professor de tecnologia e c\u00e1lculo t\u00e9cnico'
  },
  {
    value: '233205',
    label: 'Instrutor de aprendizagem e treilabelnto agropecu\u00e1rio'
  },
  {
    value: '233210',
    label: 'Instrutor de aprendizagem e treilabelnto industrial'
  },
  {
    value: '233215',
    label: 'Instrutor de aprendizagem e treilabelnto comercial'
  },
  {
    value: '233220',
    label: 'Professor instrutor de ensino e aprendizagem agroflorestal'
  },
  {
    value: '233225',
    label: 'Professor instrutor de ensino e aprendizagem em servi\u00e7os'
  },
  {
    value: '234105',
    label: 'Professor de matem\u00e1tica aplicada (no ensino superior)'
  },
  {
    value: '234110',
    label: 'Professor de matem\u00e1tica pura (no ensino superior)'
  },
  {
    value: '234115',
    label: 'Professor de estat\u00edstica (no ensino superior)'
  },
  {
    value: '234120',
    label: 'Professor de computa\u00e7\u00e3o (no ensino superior)'
  },
  {
    value: '234125',
    label: 'Professor de pesquisa operacional (no ensino superior)'
  },
  {
    value: '234205',
    label: 'Professor de f\u00edsica (ensino superior)'
  },
  {
    value: '234215',
    label: 'Professor de astronomia (ensino superior)'
  },
  {
    value: '234210',
    label: 'Professor de qu\u00edmica (ensino superior)'
  },
  {
    value: '234305',
    label: 'Professor de arquitetura'
  },
  {
    value: '234315',
    label: 'Professor de geof\u00edsica'
  },
  {
    value: '234310',
    label: 'Professor de engenharia'
  },
  {
    value: '234320',
    label: 'Professor de geologia'
  },
  {
    value: '234405',
    label: 'Professor de ci\u00eancias biol\u00f3gicas do ensino superior'
  },
  {
    value: '234415',
    label: 'Professor de enfermagem do ensino superior'
  },
  {
    value: '234450',
    label: 'Professor de odontologia'
  },
  {
    value: '234445',
    label: 'Professor de nutri\u00e7\u00e3o'
  },
  {
    value: '234440',
    label: 'Professor de medicina veterin\u00e1ria'
  },
  {
    value: '234410',
    label: 'Professor de educa\u00e7\u00e3o f\u00edsica no ensino superior'
  },
  {
    value: '234455',
    label: 'Professor de terapia ocupacional'
  },
  {
    value: '234460',
    label: 'Professor de zootecnia do ensino superior'
  },
  {
    value: '234420',
    label: 'Professor de farm\u00e1cia e bioqu\u00edmica'
  },
  {
    value: '234425',
    label: 'Professor de fisioterapia'
  },
  {
    value: '234430',
    label: 'Professor de fonoaudiologia'
  },
  {
    value: '234435',
    label: 'Professor de medicina'
  },
  {
    value: '234510',
    label: 'Professor de ensino superior na \u00e1rea de orienta\u00e7\u00e3o educacional'
  },
  {
    value: '234505',
    label: 'Professor de ensino superior na \u00e1rea de did\u00e1tica'
  },
  {
    value: '234515',
    label: 'Professor de ensino superior na \u00e1rea de pesquisa educacional'
  },
  {
    value: '234520',
    label: 'Professor de ensino superior na \u00e1rea de pr\u00e1tica de ensino'
  },
  {
    value: '234628',
    label: 'Professor de literatura brasileira'
  },
  {
    value: '234632',
    label: 'Professor de literatura portuguesa'
  },
  {
    value: '234640',
    label: 'Professor de literatura comparada'
  },
  {
    value: '234660',
    label: 'Professor de literatura de l\u00ednguas estrangeiras modernas'
  },
  {
    value: '234668',
    label: 'Professor de l\u00ednguas estrangeiras modernas'
  },
  {
    value: '234672',
    label: 'Professor de ling\u00fc\u00edstica e ling\u00fc\u00edstica aplicada'
  },
  {
    value: '234676',
    label: 'Professor de filologia e cr\u00edtica textual'
  },
  {
    value: '234680',
    label: 'Professor de semi\u00f3tica'
  },
  {
    value: '234684',
    label: 'Professor de teoria da literatura'
  },
  {
    value: '234604',
    label: 'Professor de l\u00edngua alem\u00e3'
  },
  {
    value: '234608',
    label: 'Professor de l\u00edngua italiana'
  },
  {
    value: '234612',
    label: 'Professor de l\u00edngua francesa'
  },
  {
    value: '234616',
    label: 'Professor de l\u00edngua inglesa'
  },
  {
    value: '234620',
    label: 'Professor de l\u00edngua espanhola'
  },
  {
    value: '234636',
    label: 'Professor de literatura alem\u00e3'
  },
  {
    value: '234644',
    label: 'Professor de literatura espanhola'
  },
  {
    value: '234648',
    label: 'Professor de literatura francesa'
  },
  {
    value: '234652',
    label: 'Professor de literatura inglesa'
  },
  {
    value: '234656',
    label: 'Professor de literatura italiana'
  },
  {
    value: '234664',
    label: 'Professor de outras l\u00ednguas e literaturas'
  },
  {
    value: '234624',
    label: 'Professor de l\u00edngua portuguesa'
  },
  {
    value: '234705',
    label: 'Professor de antropologia do ensino superior'
  },
  {
    value: '234710',
    label: 'Professor de arquivologia do ensino superior'
  },
  {
    value: '234770',
    label: 'Professor de sociologia do ensino superior'
  },
  {
    value: '234765',
    label: 'Professor de servi\u00e7o social do ensino superior'
  },
  {
    value: '234760',
    label: 'Professor de psicologia do ensino superior'
  },
  {
    value: '234755',
    label: 'Professor de museologia do ensino superior'
  },
  {
    value: '234715',
    label: 'Professor de biblioteconomia do ensino superior'
  },
  {
    value: '234745',
    label: 'Professor de hist\u00f3ria do ensino superior'
  },
  {
    value: '234740',
    label: 'Professor de geografia do ensino superior'
  },
  {
    value: '234735',
    label: 'Professor de filosofia do ensino superior'
  },
  {
    value: '234730',
    label: 'Professor de direito do ensino superior'
  },
  {
    value: '234725',
    label: 'Professor de comunica\u00e7\u00e3o social do ensino superior'
  },
  {
    value: '234720',
    label: 'Professor de ci\u00eancia pol\u00edtica do ensino superior'
  },
  {
    value: '234750',
    label: 'Professor de jornalismo'
  },
  {
    value: '234815',
    label: 'Professor de contabilidade'
  },
  {
    value: '234805',
    label: 'Professor de economia'
  },
  {
    value: '234810',
    label: 'Professor de administra\u00e7\u00e3o'
  },
  {
    value: '234915',
    label: 'Professor de m\u00fasica no ensino superior'
  },
  {
    value: '234910',
    label: 'Professor de artes visuais no ensino superior (artes pl\u00e1sticas e multim\u00eddia)'
  },
  {
    value: '234905',
    label: 'Professor de artes do espet\u00e1culo no ensino superior'
  },
  {
    value: '239205',
    label: 'Professor de alunos com defici\u00eancia auditiva e surdos'
  },
  {
    value: '239210',
    label: 'Professor de alunos com defici\u00eancia f\u00edsica'
  },
  {
    value: '239220',
    label: 'Professor de alunos com defici\u00eancia m\u00faltipla'
  },
  {
    value: '239225',
    label: 'Professor de alunos com defici\u00eancia visual'
  },
  {
    value: '239215',
    label: 'Professor de alunos com defici\u00eancia mental'
  },
  {
    value: '239415',
    label: 'Pedagogo'
  },
  {
    value: '239410',
    label: 'Orientador educacional'
  },
  {
    value: '239405',
    label: 'Coordenador pedag\u00f3gico'
  },
  {
    value: '239425',
    label: 'Psicopedagogo'
  },
  {
    value: '239430',
    label: 'Supervisor de ensino'
  },
  {
    value: '239435',
    label: 'Designer educacional'
  },
  {
    value: '239420',
    label: 'Professor de t\u00e9cnicas e recursos audiovisuais'
  },
  {
    value: '241040',
    label: 'Consultor jur\u00eddico'
  },
  {
    value: '241035',
    label: 'Advogado (direito do trabalho)'
  },
  {
    value: '241030',
    label: 'Advogado (\u00e1reas especiais)'
  },
  {
    value: '241025',
    label: 'Advogado (direito penal)'
  },
  {
    value: '241020',
    label: 'Advogado (direito p\u00fablico)'
  },
  {
    value: '241015',
    label: 'Advogado (direito civil)'
  },
  {
    value: '241010',
    label: 'Advogado de empresa'
  },
  {
    value: '241005',
    label: 'Advogado'
  },
  {
    value: '241225',
    label: 'Procurador do munic\u00edpio'
  },
  {
    value: '241205',
    label: 'Advogado da uni\u00e3o'
  },
  {
    value: '241235',
    label: 'Procurador fundacional'
  },
  {
    value: '241230',
    label: 'Procurador federal'
  },
  {
    value: '241210',
    label: 'Procurador aut\u00e1rquico'
  },
  {
    value: '241220',
    label: 'Procurador do estado'
  },
  {
    value: '241215',
    label: 'Procurador da fazenda nacional'
  },
  {
    value: '241315',
    label: 'Oficial do registro civil de pessoas naturais'
  },
  {
    value: '241340',
    label: 'Tabeli\u00e3o de protestos'
  },
  {
    value: '241320',
    label: 'Oficial do registro de distribui\u00e7\u00f5es'
  },
  {
    value: '241325',
    label: 'Oficial do registro de im\u00f3veis'
  },
  {
    value: '241330',
    label: 'Oficial do registro de t\u00edtulos e documentos'
  },
  {
    value: '241305',
    label: 'Oficial de registro de contratos mar\u00edtimos'
  },
  {
    value: '241310',
    label: 'Oficial do registro civil de pessoas jur\u00eddicas'
  },
  {
    value: '241335',
    label: 'Tabeli\u00e3o de notas'
  },
  {
    value: '242220',
    label: 'Procurador do trabalho'
  },
  {
    value: '242250',
    label: 'Subprocurador-geral do trabalho'
  },
  {
    value: '242235',
    label: 'Promotor de justi\u00e7a'
  },
  {
    value: '242210',
    label: 'Procurador de justi\u00e7a'
  },
  {
    value: '242245',
    label: 'Subprocurador-geral da rep\u00fablica'
  },
  {
    value: '242240',
    label: 'Subprocurador de justi\u00e7a militar'
  },
  {
    value: '242205',
    label: 'Procurador da rep\u00fablica'
  },
  {
    value: '242230',
    label: 'Procurador regional do trabalho'
  },
  {
    value: '242225',
    label: 'Procurador regional da rep\u00fablica'
  },
  {
    value: '242215',
    label: 'Procurador de justi\u00e7a militar'
  },
  {
    value: '242305',
    label: 'Delegado de pol\u00edcia'
  },
  {
    value: '242410',
    label: 'Procurador da assist\u00eancia judici\u00e1ria'
  },
  {
    value: '242405',
    label: 'Defensor p\u00fablico'
  },
  {
    value: '242910',
    label: 'Oficial t\u00e9cnico de intelig\u00eancia'
  },
  {
    value: '242905',
    label: 'Oficial de intelig\u00eancia'
  },
  {
    value: '251120',
    label: 'Soci\u00f3logo'
  },
  {
    value: '251115',
    label: 'Cientista pol\u00edtico'
  },
  {
    value: '251105',
    label: 'Antrop\u00f3logo'
  },
  {
    value: '251110',
    label: 'Arque\u00f3logo'
  },
  {
    value: '251210',
    label: 'Economista agroindustrial'
  },
  {
    value: '251205',
    label: 'Economista'
  },
  {
    value: '251215',
    label: 'Economista financeiro'
  },
  {
    value: '251225',
    label: 'Economista do setor p\u00fablico'
  },
  {
    value: '251230',
    label: 'Economista ambiental'
  },
  {
    value: '251235',
    label: 'Economista regional e urbano'
  },
  {
    value: '251220',
    label: 'Economista industrial'
  },
  {
    value: '251305',
    label: 'Ge\u00f3grafo'
  },
  {
    value: '251405',
    label: 'Fil\u00f3sofo'
  },
  {
    value: '251505',
    label: 'Psic\u00f3logo educacional'
  },
  {
    value: '251515',
    label: 'Psic\u00f3logo do esporte'
  },
  {
    value: '251510',
    label: 'Psic\u00f3logo cl\u00ednico'
  },
  {
    value: '251520',
    label: 'Psic\u00f3logo hospitalar'
  },
  {
    value: '251525',
    label: 'Psic\u00f3logo jur\u00eddico'
  },
  {
    value: '251530',
    label: 'Psic\u00f3logo social'
  },
  {
    value: '251535',
    label: 'Psic\u00f3logo do tr\u00e2nsito'
  },
  {
    value: '251540',
    label: 'Psic\u00f3logo do trabalho'
  },
  {
    value: '251555',
    label: 'Psic\u00f3logo acupunturista'
  },
  {
    value: '251550',
    label: 'Psicanalista'
  },
  {
    value: '251545',
    label: 'Neuropsic\u00f3logo'
  },
  {
    value: '251610',
    label: 'Economista dom\u00e9stico'
  },
  {
    value: '251605',
    label: 'Assistente social'
  },
  {
    value: '252105',
    label: 'Administrador'
  },
  {
    value: '252205',
    label: 'Auditor (contadores e afins)'
  },
  {
    value: '252210',
    label: 'Contador'
  },
  {
    value: '252215',
    label: 'Perito cont\u00e1bil'
  },
  {
    value: '252320',
    label: 'Tecn\u00f3logo em secretariado escolar'
  },
  {
    value: '252310',
    label: 'Secret\u00e1rio  bil\u00edng\u00fce'
  },
  {
    value: '252305',
    label: 'Secret\u00e1ria(o) executiva(o)'
  },
  {
    value: '252315',
    label: 'Secret\u00e1ria tril\u00edng\u00fce'
  },
  {
    value: '252405',
    label: 'Analista de recursos humanos'
  },
  {
    value: '252530',
    label: 'Analista de cr\u00e9dito rural'
  },
  {
    value: '252525',
    label: 'Analista de cr\u00e9dito (institui\u00e7\u00f5es financeiras)'
  },
  {
    value: '252535',
    label: 'Analista de leasing'
  },
  {
    value: '252515',
    label: 'Analista de cobran\u00e7a (institui\u00e7\u00f5es financeiras)'
  },
  {
    value: '252545',
    label: 'Analista financeiro (institui\u00e7\u00f5es financeiras)'
  },
  {
    value: '252550',
    label: 'Profissional de rela\u00e7\u00f5es com investidores'
  },
  {
    value: '252540',
    label: 'Analista de produtos banc\u00e1rios'
  },
  {
    value: '252505',
    label: 'Administrador de fundos e carteiras de investimento'
  },
  {
    value: '252510',
    label: 'Analista de c\u00e2mbio'
  },
  {
    value: '252605',
    label: 'Gestor em seguran\u00e7a'
  },
  {
    value: '252705',
    label: 'Analista de pcp (programa\u00e7\u00e3o e controle da produ\u00e7\u00e3o)'
  },
  {
    value: '252710',
    label: 'Analista de planejamento de materias'
  },
  {
    value: '252720',
    label: 'Analista de projetos logisticos'
  },
  {
    value: '252725',
    label: 'Analista de gest\u00e3o de estoque'
  },
  {
    value: '252715',
    label: 'Analista de logistica'
  },
  {
    value: '253115',
    label: 'Publicit\u00e1rio'
  },
  {
    value: '253120',
    label: 'Diretor de m\u00eddia (publicidade)'
  },
  {
    value: '253125',
    label: 'Diretor de arte (publicidade)'
  },
  {
    value: '253130',
    label: 'Diretor de cria\u00e7\u00e3o'
  },
  {
    value: '253135',
    label: 'Diretor de contas (publicidade)'
  },
  {
    value: '253140',
    label: 'Agenciador de propaganda'
  },
  {
    value: '253110',
    label: 'Redator de publicidade'
  },
  {
    value: '253215',
    label: 'Gerente de contas - pessoa f\u00edsica e jur\u00eddica'
  },
  {
    value: '253220',
    label: 'Gerente de grandes contas (corporate)'
  },
  {
    value: '253225',
    label: 'Operador de neg\u00f3cios'
  },
  {
    value: '253205',
    label: 'Gerente de capta\u00e7\u00e3o (fundos e investimentos institucionais)'
  },
  {
    value: '253210',
    label: 'Gerente de clientes especiais (private)'
  },
  {
    value: '253305',
    label: 'Corretor de valores, ativos financeiros, mercadorias e derivativos'
  },
  {
    value: '254105',
    label: 'Auditor-fiscal da receita federal'
  },
  {
    value: '254110',
    label: 'T\u00e9cnico da receita federal'
  },
  {
    value: '254205',
    label: 'Auditor-fiscal da previd\u00eancia social'
  },
  {
    value: '254305',
    label: 'Auditor-fiscal do trabalho'
  },
  {
    value: '254310',
    label: 'Agente de higiene e seguran\u00e7a'
  },
  {
    value: '254405',
    label: 'Fiscal de tributos estadual'
  },
  {
    value: '254410',
    label: 'Fiscal de tributos municipal'
  },
  {
    value: '254415',
    label: 'T\u00e9cnico de tributos estadual'
  },
  {
    value: '254420',
    label: 'T\u00e9cnico de tributos municipal'
  },
  {
    value: '254505',
    label: 'Fiscal de atividades urbanas'
  },
  {
    value: '261125',
    label: 'Jornalista'
  },
  {
    value: '261110',
    label: 'Assessor de imprensa'
  },
  {
    value: '261115',
    label: 'Diretor de reda\u00e7\u00e3o'
  },
  {
    value: '261120',
    label: 'Editor'
  },
  {
    value: '261105',
    label: 'Arquivista pesquisador (jornalismo)'
  },
  {
    value: '261130',
    label: 'Produtor de texto'
  },
  {
    value: '261135',
    label: 'Rep\u00f3rter (exclusive r\u00e1dio e televis\u00e3o)'
  },
  {
    value: '261140',
    label: 'Revisor de texto'
  },
  {
    value: '261215',
    label: 'Analista de informa\u00e7\u00f5es (pesquisador de informa\u00e7\u00f5es de rede)'
  },
  {
    value: '261210',
    label: 'Documentalista'
  },
  {
    value: '261205',
    label: 'Bibliotec\u00e1rio'
  },
  {
    value: '261305',
    label: 'Arquivista'
  },
  {
    value: '261310',
    label: 'Muse\u00f3logo'
  },
  {
    value: '261405',
    label: 'Fil\u00f3logo'
  },
  {
    value: '261430',
    label: 'Audiodescritor'
  },
  {
    value: '261425',
    label: 'Int\u00e9rprete de l\u00edngua de sinais'
  },
  {
    value: '261420',
    label: 'Tradutor'
  },
  {
    value: '261415',
    label: 'Ling\u00fcista'
  },
  {
    value: '261410',
    label: 'Int\u00e9rprete'
  },
  {
    value: '261520',
    label: 'Escritor de n\u00e3o fic\u00e7\u00e3o'
  },
  {
    value: '261515',
    label: 'Escritor de fic\u00e7\u00e3o'
  },
  {
    value: '261530',
    label: 'Redator de textos t\u00e9cnicos'
  },
  {
    value: '261525',
    label: 'Poeta'
  },
  {
    value: '261510',
    label: 'Cr\u00edtico'
  },
  {
    value: '261505',
    label: 'Autor-roteirista'
  },
  {
    value: '261610',
    label: 'Editor de livro'
  },
  {
    value: '261615',
    label: 'Editor de m\u00eddia eletr\u00f4nica'
  },
  {
    value: '261625',
    label: 'Editor de revista cient\u00edfica'
  },
  {
    value: '261620',
    label: 'Editor de revista'
  },
  {
    value: '261605',
    label: 'Editor de jornal'
  },
  {
    value: '261715',
    label: 'Locutor de r\u00e1dio e televis\u00e3o'
  },
  {
    value: '261710',
    label: 'Comentarista de r\u00e1dio e televis\u00e3o'
  },
  {
    value: '261730',
    label: 'Rep\u00f3rter de r\u00e1dio e televis\u00e3o'
  },
  {
    value: '261725',
    label: 'Narrador em programas de r\u00e1dio e televis\u00e3o'
  },
  {
    value: '261720',
    label: 'Locutor publicit\u00e1rio de r\u00e1dio e televis\u00e3o'
  },
  {
    value: '261705',
    label: '\u00c2ncora de r\u00e1dio e televis\u00e3o'
  },
  {
    value: '261820',
    label: 'Rep\u00f3rter fotogr\u00e1fico'
  },
  {
    value: '261815',
    label: 'Fot\u00f3grafo retratista'
  },
  {
    value: '261805',
    label: 'Fot\u00f3grafo'
  },
  {
    value: '261810',
    label: 'Fot\u00f3grafo publicit\u00e1rio'
  },
  {
    value: '262130',
    label: 'Tecn\u00f3logo em produ\u00e7\u00e3o fonogr\u00e1fica'
  },
  {
    value: '262125',
    label: 'Produtor de televis\u00e3o'
  },
  {
    value: '262120',
    label: 'Produtor de teatro'
  },
  {
    value: '262115',
    label: 'Produtor de r\u00e1dio'
  },
  {
    value: '262110',
    label: 'Produtor cinematogr\u00e1fico'
  },
  {
    value: '262135',
    label: 'Tecn\u00f3logo em produ\u00e7\u00e3o audiovisual'
  },
  {
    value: '262105',
    label: 'Produtor cultural'
  },
  {
    value: '262205',
    label: 'Diretor de cinema'
  },
  {
    value: '262210',
    label: 'Diretor de programas de r\u00e1dio'
  },
  {
    value: '262215',
    label: 'Diretor de programas de televis\u00e3o'
  },
  {
    value: '262220',
    label: 'Diretor teatral'
  },
  {
    value: '262305',
    label: 'Cen\u00f3grafo carnavalesco e festas populares'
  },
  {
    value: '262310',
    label: 'Cen\u00f3grafo de cinema'
  },
  {
    value: '262315',
    label: 'Cen\u00f3grafo de eventos'
  },
  {
    value: '262320',
    label: 'Cen\u00f3grafo de teatro'
  },
  {
    value: '262325',
    label: 'Cen\u00f3grafo de tv'
  },
  {
    value: '262330',
    label: 'Diretor de arte'
  },
  {
    value: '262420',
    label: 'Desenhista industrial de produto (designer de produto)'
  },
  {
    value: '262425',
    label: 'Desenhista industrial de produto de moda (designer de moda)'
  },
  {
    value: '262405',
    label: 'Artista (artes visuais)'
  },
  {
    value: '262415',
    label: 'Conservador-restaurador de bens  culturais'
  },
  {
    value: '262410',
    label: 'Desenhista industrial gr\u00e1fico (designer gr\u00e1fico)'
  },
  {
    value: '262505',
    label: 'Ator'
  },
  {
    value: '262620',
    label: 'Music\u00f3logo'
  },
  {
    value: '262615',
    label: 'M\u00fasico regente'
  },
  {
    value: '262610',
    label: 'M\u00fasico arranjador'
  },
  {
    value: '262605',
    label: 'Compositor'
  },
  {
    value: '262705',
    label: 'M\u00fasico int\u00e9rprete cantor'
  },
  {
    value: '262710',
    label: 'M\u00fasico int\u00e9rprete instrumentista'
  },
  {
    value: '262805',
    label: 'Assistente de coreografia'
  },
  {
    value: '262810',
    label: 'Bailarino (exceto dan\u00e7as populares)'
  },
  {
    value: '262815',
    label: 'Core\u00f3grafo'
  },
  {
    value: '262820',
    label: 'Dramaturgo de dan\u00e7a'
  },
  {
    value: '262825',
    label: 'Ensaiador de dan\u00e7a'
  },
  {
    value: '262830',
    label: 'Professor de dan\u00e7a'
  },
  {
    value: '262905',
    label: 'Decorador de interiores de n\u00edvel superior'
  },
  {
    value: '263115',
    label: 'Te\u00f3logo'
  },
  {
    value: '263110',
    label: 'Mission\u00e1rio'
  },
  {
    value: '263105',
    label: 'Ministro de culto religioso'
  },
  {
    value: '271110',
    label: 'Tecn\u00f3logo em gastronomia'
  },
  {
    value: '271105',
    label: 'Chefe de cozinha'
  },
  {
    value: '300105',
    label: 'T\u00e9cnico em mecatr\u00f4nica - automa\u00e7\u00e3o da manufatura'
  },
  {
    value: '300110',
    label: 'T\u00e9cnico em mecatr\u00f4nica - rob\u00f3tica'
  },
  {
    value: '300305',
    label: 'T\u00e9cnico em eletromec\u00e2nica'
  },
  {
    value: '301105',
    label: 'T\u00e9cnico de laborat\u00f3rio industrial'
  },
  {
    value: '301110',
    label:
      'T\u00e9cnico de laborat\u00f3rio de an\u00e1lises f\u00edsico-qu\u00edmicas (materiais de constru\u00e7\u00e3o)'
  },
  {
    value: '301115',
    label: 'T\u00e9cnico qu\u00edmico de petr\u00f3leo'
  },
  {
    value: '301205',
    label: 'T\u00e9cnico de apoio \u00e0 bioengenharia'
  },
  {
    value: '311115',
    label: 'T\u00e9cnico em curtimento'
  },
  {
    value: '311110',
    label: 'T\u00e9cnico de celulose e papel'
  },
  {
    value: '311105',
    label: 'T\u00e9cnico qu\u00edmico'
  },
  {
    value: '311205',
    label: 'T\u00e9cnico em petroqu\u00edmica'
  },
  {
    value: '311305',
    label: 'T\u00e9cnico em materiais, produtos cer\u00e2micos e vidros'
  },
  {
    value: '311405',
    label: 'T\u00e9cnico em borracha'
  },
  {
    value: '311410',
    label: 'T\u00e9cnico em pl\u00e1stico'
  },
  {
    value: '311515',
    label:
      'T\u00e9cnico de utilidade (produ\u00e7\u00e3o e distribui\u00e7\u00e3o de vapor, gases, \u00f3leos, combust\u00edveis, energia)'
  },
  {
    value: '311510',
    label: 'T\u00e9cnico de meteorologia'
  },
  {
    value: '311505',
    label: 'T\u00e9cnico de controle de meio ambiente'
  },
  {
    value: '311520',
    label: 'T\u00e9cnico em tratamento de efluentes'
  },
  {
    value: '311605',
    label: 'T\u00e9cnico t\u00eaxtil'
  },
  {
    value: '311610',
    label: 'T\u00e9cnico t\u00eaxtil (tratamentos qu\u00edmicos)'
  },
  {
    value: '311615',
    label: 'T\u00e9cnico t\u00eaxtil de fia\u00e7\u00e3o'
  },
  {
    value: '311620',
    label: 'T\u00e9cnico t\u00eaxtil de malharia'
  },
  {
    value: '311625',
    label: 'T\u00e9cnico t\u00eaxtil de tecelagem'
  },
  {
    value: '311705',
    label: 'Colorista de papel'
  },
  {
    value: '311710',
    label: 'Colorista t\u00eaxtil'
  },
  {
    value: '311715',
    label: 'Preparador de tintas'
  },
  {
    value: '311720',
    label: 'Preparador de tintas (f\u00e1brica de tecidos)'
  },
  {
    value: '311725',
    label: 'Tingidor de couros e peles'
  },
  {
    value: '312105',
    label: 'T\u00e9cnico de obras civis'
  },
  {
    value: '312210',
    label: 'T\u00e9cnico de saneamento'
  },
  {
    value: '312205',
    label: 'T\u00e9cnico de estradas'
  },
  {
    value: '312315',
    label: 'T\u00e9cnico em hidrografia'
  },
  {
    value: '312310',
    label: 'T\u00e9cnico em geod\u00e9sia e cartografia'
  },
  {
    value: '312320',
    label: 'Top\u00f3grafo'
  },
  {
    value: '312305',
    label: 'T\u00e9cnico em agrimensura'
  },
  {
    value: '313130',
    label: 'T\u00e9cnico eletricista'
  },
  {
    value: '313125',
    label: 'T\u00e9cnico de manuten\u00e7\u00e3o el\u00e9trica de m\u00e1quina'
  },
  {
    value: '313120',
    label: 'T\u00e9cnico de manuten\u00e7\u00e3o el\u00e9trica'
  },
  {
    value: '313115',
    label: 'Eletrot\u00e9cnico na fabrica\u00e7\u00e3o, montagem e instala\u00e7\u00e3o de m\u00e1quinas e equipamentos'
  },
  {
    value: '313110',
    label: 'Eletrot\u00e9cnico (produ\u00e7\u00e3o de energia)'
  },
  {
    value: '313105',
    label: 'Eletrot\u00e9cnico'
  },
  {
    value: '313215',
    label: 'T\u00e9cnico eletr\u00f4nico'
  },
  {
    value: '313220',
    label: 'T\u00e9cnico em manuten\u00e7\u00e3o de equipamentos de inform\u00e1tica'
  },
  {
    value: '313210',
    label: 'T\u00e9cnico de manuten\u00e7\u00e3o eletr\u00f4nica (circuitos de m\u00e1quinas com comando num\u00e9rico)'
  },
  {
    value: '313205',
    label: 'T\u00e9cnico de manuten\u00e7\u00e3o eletr\u00f4nica'
  },
  {
    value: '313320',
    label: 'T\u00e9cnico de transmiss\u00e3o (telecomunica\u00e7\u00f5es)'
  },
  {
    value: '313315',
    label: 'T\u00e9cnico de telecomunica\u00e7\u00f5es (telefonia)'
  },
  {
    value: '313310',
    label: 'T\u00e9cnico de rede (telecomunica\u00e7\u00f5es)'
  },
  {
    value: '313305',
    label: 'T\u00e9cnico de comunica\u00e7\u00e3o de dados'
  },
  {
    value: '313405',
    label: 'T\u00e9cnico em calibra\u00e7\u00e3o'
  },
  {
    value: '313410',
    label: 'T\u00e9cnico em instrumenta\u00e7\u00e3o'
  },
  {
    value: '313415',
    label: 'Encarregado de manuten\u00e7\u00e3o de instrumentos de controle, medi\u00e7\u00e3o e similares'
  },
  {
    value: '313505',
    label: 'T\u00e9cnico em fot\u00f4nica'
  },
  {
    value: '314105',
    label: 'T\u00e9cnico em mec\u00e2nica de precis\u00e3o'
  },
  {
    value: '314110',
    label: 'T\u00e9cnico mec\u00e2nico'
  },
  {
    value: '314115',
    label: 'T\u00e9cnico mec\u00e2nico (calefa\u00e7\u00e3o, ventila\u00e7\u00e3o e refrigera\u00e7\u00e3o)'
  },
  {
    value: '314120',
    label: 'T\u00e9cnico mec\u00e2nico (m\u00e1quinas)'
  },
  {
    value: '314125',
    label: 'T\u00e9cnico mec\u00e2nico (motores)'
  },
  {
    value: '314205',
    label: 'T\u00e9cnico mec\u00e2nico na fabrica\u00e7\u00e3o de ferramentas'
  },
  {
    value: '314210',
    label: 'T\u00e9cnico mec\u00e2nico na manuten\u00e7\u00e3o de ferramentas'
  },
  {
    value: '314305',
    label: 'T\u00e9cnico em automobil\u00edstica'
  },
  {
    value: '314310',
    label: 'T\u00e9cnico mec\u00e2nico (aeronaves)'
  },
  {
    value: '314315',
    label: 'T\u00e9cnico mec\u00e2nico (embarca\u00e7\u00f5es)'
  },
  {
    value: '314405',
    label: 'T\u00e9cnico de manuten\u00e7\u00e3o de sistemas e instrumentos'
  },
  {
    value: '314410',
    label: 'T\u00e9cnico em manuten\u00e7\u00e3o de m\u00e1quinas'
  },
  {
    value: '314620',
    label: 'T\u00e9cnico em soldagem'
  },
  {
    value: '314615',
    label: 'T\u00e9cnico em estruturas met\u00e1licas'
  },
  {
    value: '314610',
    label: 'T\u00e9cnico em caldeiraria'
  },
  {
    value: '314605',
    label: 'Inspetor de soldagem'
  },
  {
    value: '314625',
    label: 'Tecn\u00f3logo em soldagem'
  },
  {
    value: '314725',
    label: 'T\u00e9cnico de redu\u00e7\u00e3o na siderurgia (primeira fus\u00e3o)'
  },
  {
    value: '314720',
    label: 'T\u00e9cnico de lamina\u00e7\u00e3o em siderurgia'
  },
  {
    value: '314715',
    label: 'T\u00e9cnico de fundi\u00e7\u00e3o em siderurgia'
  },
  {
    value: '314710',
    label: 'T\u00e9cnico de aciaria em siderurgia'
  },
  {
    value: '314705',
    label: 'T\u00e9cnico de acabamento em siderurgia'
  },
  {
    value: '314730',
    label: 'T\u00e9cnico de refrat\u00e1rio em siderurgia'
  },
  {
    value: '316115',
    label: 'T\u00e9cnico em geoqu\u00edmica'
  },
  {
    value: '316110',
    label: 'T\u00e9cnico em geologia'
  },
  {
    value: '316105',
    label: 'T\u00e9cnico em geof\u00edsica'
  },
  {
    value: '316120',
    label: 'T\u00e9cnico em geotecnia'
  },
  {
    value: '316325',
    label: 'T\u00e9cnico de produ\u00e7\u00e3o em refino de petr\u00f3leo'
  },
  {
    value: '316330',
    label: 'T\u00e9cnico em planejamento de lavra de minas'
  },
  {
    value: '316335',
    label: 'Desincrustador (po\u00e7os de petr\u00f3leo)'
  },
  {
    value: '316320',
    label: 'T\u00e9cnico em pesquisa mineral'
  },
  {
    value: '316315',
    label: 'T\u00e9cnico em processamento mineral (exceto petr\u00f3leo)'
  },
  {
    value: '316340',
    label: 'Cimentador (po\u00e7os de petr\u00f3leo)'
  },
  {
    value: '316305',
    label: 'T\u00e9cnico de minera\u00e7\u00e3o'
  },
  {
    value: '316310',
    label: 'T\u00e9cnico de minera\u00e7\u00e3o (\u00f3leo e petr\u00f3leo)'
  },
  {
    value: '317105',
    label: 'Programador de internet'
  },
  {
    value: '317110',
    label: 'Programador de sistemas de informa\u00e7\u00e3o'
  },
  {
    value: '317115',
    label: 'Programador de m\u00e1quinas - ferramenta com comando num\u00e9rico'
  },
  {
    value: '317120',
    label: 'Programador de multim\u00eddia'
  },
  {
    value: '317205',
    label: 'Operador de computador (inclusive microcomputador)'
  },
  {
    value: '317210',
    label: 'T\u00e9cnico de apoio ao usu\u00e1rio de inform\u00e1tica (helpdesk)'
  },
  {
    value: '318005',
    label: 'Desenhista t\u00e9cnico'
  },
  {
    value: '318015',
    label: 'Desenhista detalhista'
  },
  {
    value: '318010',
    label: 'Desenhista copista'
  },
  {
    value: '318105',
    label: 'Desenhista t\u00e9cnico (arquitetura)'
  },
  {
    value: '318110',
    label: 'Desenhista t\u00e9cnico (cartografia)'
  },
  {
    value: '318115',
    label: 'Desenhista t\u00e9cnico (constru\u00e7\u00e3o civil)'
  },
  {
    value: '318120',
    label: 'Desenhista t\u00e9cnico (instala\u00e7\u00f5es hidrossanit\u00e1rias)'
  },
  {
    value: '318215',
    label: 'Desenhista t\u00e9cnico naval'
  },
  {
    value: '318210',
    label: 'Desenhista t\u00e9cnico aeron\u00e1utico'
  },
  {
    value: '318205',
    label: 'Desenhista t\u00e9cnico mec\u00e2nico'
  },
  {
    value: '318310',
    label: 'Desenhista t\u00e9cnico (calefa\u00e7\u00e3o, ventila\u00e7\u00e3o e refrigera\u00e7\u00e3o)'
  },
  {
    value: '318305',
    label: 'Desenhista t\u00e9cnico (eletricidade e eletr\u00f4nica)'
  },
  {
    value: '318425',
    label: 'Desenhista t\u00e9cnico (mobili\u00e1rio)'
  },
  {
    value: '318420',
    label: 'Desenhista t\u00e9cnico (ind\u00fastria t\u00eaxtil)'
  },
  {
    value: '318415',
    label: 'Desenhista t\u00e9cnico (ilustra\u00e7\u00f5es t\u00e9cnicas)'
  },
  {
    value: '318410',
    label: 'Desenhista t\u00e9cnico (ilustra\u00e7\u00f5es art\u00edsticas)'
  },
  {
    value: '318430',
    label: 'Desenhista t\u00e9cnico de embalagens, maquetes e leiautes'
  },
  {
    value: '318405',
    label: 'Desenhista t\u00e9cnico (artes gr\u00e1ficas)'
  },
  {
    value: '318505',
    label: 'Desenhista projetista de arquitetura'
  },
  {
    value: '318510',
    label: 'Desenhista projetista de constru\u00e7\u00e3o civil'
  },
  {
    value: '318610',
    label: 'Desenhista projetista mec\u00e2nico'
  },
  {
    value: '318605',
    label: 'Desenhista projetista de m\u00e1quinas'
  },
  {
    value: '318705',
    label: 'Desenhista projetista de eletricidade'
  },
  {
    value: '318710',
    label: 'Desenhista projetista eletr\u00f4nico'
  },
  {
    value: '318810',
    label: 'Modelista de roupas'
  },
  {
    value: '318805',
    label: 'Projetista de m\u00f3veis'
  },
  {
    value: '318815',
    label: 'Modelista de cal\u00e7ados'
  },
  {
    value: '319105',
    label: 'T\u00e9cnico em cal\u00e7ados e artefatos de couro'
  },
  {
    value: '319110',
    label: 'T\u00e9cnico em confec\u00e7\u00f5es do vestu\u00e1rio'
  },
  {
    value: '319205',
    label: 'T\u00e9cnico do mobili\u00e1rio'
  },
  {
    value: '320110',
    label: 'T\u00e9cnico em histologia'
  },
  {
    value: '320105',
    label: 'T\u00e9cnico em bioterismo'
  },
  {
    value: '321105',
    label: 'T\u00e9cnico agr\u00edcola'
  },
  {
    value: '321110',
    label: 'T\u00e9cnico agropecu\u00e1rio'
  },
  {
    value: '321205',
    label: 'T\u00e9cnico em madeira'
  },
  {
    value: '321210',
    label: 'T\u00e9cnico florestal'
  },
  {
    value: '321320',
    label: 'T\u00e9cnico em ranicultura'
  },
  {
    value: '321315',
    label: 'T\u00e9cnico em mitilicultura'
  },
  {
    value: '321310',
    label: 'T\u00e9cnico em carcinicultura'
  },
  {
    value: '321305',
    label: 'T\u00e9cnico em piscicultura'
  },
  {
    value: '322130',
    label: 'Esteticista'
  },
  {
    value: '322135',
    label: 'Doula'
  },
  {
    value: '322125',
    label: 'Terapeuta hol\u00edstico'
  },
  {
    value: '322120',
    label: 'Massoterapeuta'
  },
  {
    value: '322115',
    label: 'T\u00e9cnico em quiropraxia'
  },
  {
    value: '322105',
    label: 'T\u00e9cnico em acupuntura'
  },
  {
    value: '322110',
    label: 'Pod\u00f3logo'
  },
  {
    value: '322220',
    label: 'T\u00e9cnico de enfermagem psiqui\u00e1trica'
  },
  {
    value: '322250',
    label: 'Auxiliar de enfermagem da estrat\u00e9gia de sa\u00fade da fam\u00edlia'
  },
  {
    value: '322205',
    label: 'T\u00e9cnico de enfermagem'
  },
  {
    value: '322210',
    label: 'T\u00e9cnico de enfermagem de terapia intensiva'
  },
  {
    value: '322215',
    label: 'T\u00e9cnico de enfermagem do trabalho'
  },
  {
    value: '322245',
    label: 'T\u00e9cnico de enfermagem da estrat\u00e9gia de sa\u00fade da fam\u00edlia'
  },
  {
    value: '322225',
    label: 'Instrumentador cir\u00fargico'
  },
  {
    value: '322230',
    label: 'Auxiliar de enfermagem'
  },
  {
    value: '322235',
    label: 'Auxiliar de enfermagem do trabalho'
  },
  {
    value: '322240',
    label: 'Auxiliar de sa\u00fade (navega\u00e7\u00e3o mar\u00edtima)'
  },
  {
    value: '322305',
    label: 'T\u00e9cnico em \u00f3ptica e optometria'
  },
  {
    value: '322420',
    label: 'Auxiliar de pr\u00f3tese dent\u00e1ria'
  },
  {
    value: '322425',
    label: 'T\u00e9cnico em sa\u00fade bucal da estrat\u00e9gia de sa\u00fade da fam\u00edlia'
  },
  {
    value: '322430',
    label: 'Auxiliar em sa\u00fade bucal da estrat\u00e9gia de sa\u00fade da fam\u00edlia'
  },
  {
    value: '322405',
    label: 'T\u00e9cnico em sa\u00fade bucal'
  },
  {
    value: '322410',
    label: 'Prot\u00e9tico dent\u00e1rio'
  },
  {
    value: '322415',
    label: 'Auxiliar em sa\u00fade bucal'
  },
  {
    value: '322505',
    label: 'T\u00e9cnico de ortopedia'
  },
  {
    value: '322605',
    label: 'T\u00e9cnico de imobiliza\u00e7\u00e3o ortop\u00e9dica'
  },
  {
    value: '323105',
    label: 'T\u00e9cnico em pecu\u00e1ria'
  },
  {
    value: '324130',
    label: 'T\u00e9cnico em espirometria'
  },
  {
    value: '324125',
    label: 'Tecn\u00f3logo oft\u00e1lmico'
  },
  {
    value: '324120',
    label: 'Tecn\u00f3logo em radiologia'
  },
  {
    value: '324115',
    label: 'T\u00e9cnico em radiologia e imagenologia'
  },
  {
    value: '324105',
    label: 'T\u00e9cnico em m\u00e9todos eletrogr\u00e1ficos em encefalografia'
  },
  {
    value: '324110',
    label: 'T\u00e9cnico em m\u00e9todos gr\u00e1ficos em cardiologia'
  },
  {
    value: '324205',
    label: 'T\u00e9cnico em patologia cl\u00ednica'
  },
  {
    value: '324220',
    label: 'T\u00e9cnico em hemoterapia'
  },
  {
    value: '324215',
    label: 'Citot\u00e9cnico'
  },
  {
    value: '325015',
    label: 'Perfumista'
  },
  {
    value: '325010',
    label: 'Aromista'
  },
  {
    value: '325005',
    label: 'En\u00f3logo'
  },
  {
    value: '325115',
    label: 'T\u00e9cnico em farm\u00e1cia'
  },
  {
    value: '325110',
    label: 'T\u00e9cnico em laborat\u00f3rio de farm\u00e1cia'
  },
  {
    value: '325105',
    label: 'Auxiliar t\u00e9cnico em laborat\u00f3rio de farm\u00e1cia'
  },
  {
    value: '325205',
    label: 'T\u00e9cnico de alimentos'
  },
  {
    value: '325210',
    label: 'T\u00e9cnico em nutri\u00e7\u00e3o e diet\u00e9tica'
  },
  {
    value: '325310',
    label: 'T\u00e9cnico em imunobiol\u00f3gicos'
  },
  {
    value: '325305',
    label: 'T\u00e9cnico em biotecnologia'
  },
  {
    value: '328105',
    label: 'Embalsamador'
  },
  {
    value: '328110',
    label: 'Taxidermista'
  },
  {
    value: '331110',
    label: 'Auxiliar de desenvolvimento infantil'
  },
  {
    value: '331105',
    label: 'Professor de n\u00edvel m\u00e9dio na educa\u00e7\u00e3o infantil'
  },
  {
    value: '331205',
    label: 'Professor de n\u00edvel m\u00e9dio no ensino fundamental'
  },
  {
    value: '331305',
    label: 'Professor de n\u00edvel m\u00e9dio no ensino profissionalizante'
  },
  {
    value: '332105',
    label: 'Professor leigo no ensino fundamental'
  },
  {
    value: '332205',
    label: 'Professor pr\u00e1tico no ensino profissionalizante'
  },
  {
    value: '333105',
    label: 'Instrutor de auto-escola'
  },
  {
    value: '333110',
    label: 'Instrutor de cursos livres'
  },
  {
    value: '333115',
    label: 'Professores de cursos livres'
  },
  {
    value: '334110',
    label: 'Inspetor de alunos de escola p\u00fablica'
  },
  {
    value: '334105',
    label: 'Inspetor de alunos de escola privada'
  },
  {
    value: '334115',
    label: 'Monitor de transporte escolar'
  },
  {
    value: '341120',
    label: 'Piloto agr\u00edcola'
  },
  {
    value: '341115',
    label: 'Mec\u00e2nico de v\u00f4o'
  },
  {
    value: '341110',
    label: 'Piloto comercial de helic\u00f3ptero (exceto linhas a\u00e9reas)'
  },
  {
    value: '341105',
    label: 'Piloto comercial (exceto linhas a\u00e9reas)'
  },
  {
    value: '341250',
    label: 'Auxiliar t\u00e9cnico de sinaliza\u00e7\u00e3o nautica'
  },
  {
    value: '341230',
    label: 'Piloto fluvial'
  },
  {
    value: '341225',
    label: 'Patr\u00e3o de pesca na navega\u00e7\u00e3o interior'
  },
  {
    value: '341220',
    label: 'Patr\u00e3o de pesca de alto-mar'
  },
  {
    value: '341215',
    label: 'Mestre fluvial'
  },
  {
    value: '341210',
    label: 'Mestre de cabotagem'
  },
  {
    value: '341205',
    label: 'Contramestre de cabotagem'
  },
  {
    value: '341235',
    label: 'T\u00e9nico em sinaliza\u00e7\u00e3o nautica'
  },
  {
    value: '341245',
    label: 'T\u00e9cnico em sinais navais'
  },
  {
    value: '341240',
    label: 'T\u00e9cnicos em manobras em equipamentos de conv\u00e9s'
  },
  {
    value: '341305',
    label: 'Condutor maquinista motorista fluvial'
  },
  {
    value: '341320',
    label: 'Condutor de m\u00e1quinas (bombeador)'
  },
  {
    value: '341310',
    label: 'Condutor de m\u00e1quinas'
  },
  {
    value: '341315',
    label: 'Eletricista de bordo'
  },
  {
    value: '341325',
    label: 'Condutor de m\u00e1quinas (mec\u00e2nico)'
  },
  {
    value: '342105',
    label: 'Analista de transporte em com\u00e9rcio exterior'
  },
  {
    value: '342110',
    label: 'Operador de transporte multimodal'
  },
  {
    value: '342115',
    label: 'Controlador de servi\u00e7os de m\u00e1quinas e ve\u00edculos'
  },
  {
    value: '342120',
    label: 'Afretador'
  },
  {
    value: '342125',
    label: 'Tecn\u00f3logo em log\u00edstica de transporte'
  },
  {
    value: '342215',
    label: 'Analista de desembara\u00e7o aduaneiro'
  },
  {
    value: '342205',
    label: 'Ajudante de despachante aduaneiro'
  },
  {
    value: '342210',
    label: 'Despachante aduaneiro'
  },
  {
    value: '342315',
    label: 'Supervisor de carga e descarga'
  },
  {
    value: '342305',
    label: 'Chefe de servi\u00e7o de transporte rodovi\u00e1rio (passageiros e cargas)'
  },
  {
    value: '342310',
    label: 'Inspetor de servi\u00e7os de transportes rodovi\u00e1rios (passageiros e cargas)'
  },
  {
    value: '342405',
    label: 'Agente de esta\u00e7\u00e3o (ferrovia e metr\u00f4)'
  },
  {
    value: '342410',
    label: 'Operador de centro de controle (ferrovia e metr\u00f4)'
  },
  {
    value: '342515',
    label: 'Fiscal de avia\u00e7\u00e3o civil (fac)'
  },
  {
    value: '342510',
    label: 'Despachante operacional de v\u00f4o'
  },
  {
    value: '342505',
    label: 'Controlador de tr\u00e1fego a\u00e9reo'
  },
  {
    value: '342550',
    label: 'Agente de prote\u00e7\u00e3o de avia\u00e7\u00e3o civil'
  },
  {
    value: '342545',
    label: 'Supervisor de empresa a\u00e9rea em aeroportos'
  },
  {
    value: '342540',
    label: 'Supervisor da administra\u00e7\u00e3o de aeroportos'
  },
  {
    value: '342535',
    label: 'Operador de atendimento aerovi\u00e1rio'
  },
  {
    value: '342520',
    label: 'Gerente da administra\u00e7\u00e3o de aeroportos'
  },
  {
    value: '342525',
    label: 'Gerente de empresa a\u00e9rea em aeroportos'
  },
  {
    value: '342530',
    label: 'Inspetor de avia\u00e7\u00e3o civil'
  },
  {
    value: '342605',
    label: 'Chefe de esta\u00e7\u00e3o portu\u00e1ria'
  },
  {
    value: '342610',
    label: 'Supervisor de opera\u00e7\u00f5es portu\u00e1rias'
  },
  {
    value: '351105',
    label: 'T\u00e9cnico de contabilidade'
  },
  {
    value: '351110',
    label: 'Chefe de contabilidade (t\u00e9cnico)'
  },
  {
    value: '351115',
    label: 'Consultor cont\u00e1bil (t\u00e9cnico)'
  },
  {
    value: '351305',
    label: 'T\u00e9cnico em administra\u00e7\u00e3o'
  },
  {
    value: '351310',
    label: 'T\u00e9cnico em administra\u00e7\u00e3o de com\u00e9rcio exterior'
  },
  {
    value: '351315',
    label: 'Agente de recrutamento e sele\u00e7\u00e3o'
  },
  {
    value: '351405',
    label: 'Escrevente'
  },
  {
    value: '351410',
    label: 'Escriv\u00e3o judicial'
  },
  {
    value: '351430',
    label: 'Auxiliar de servi\u00e7os jur\u00eddicos'
  },
  {
    value: '351425',
    label: 'Oficial de justi\u00e7a'
  },
  {
    value: '351415',
    label: 'Escriv\u00e3o extra - judicial'
  },
  {
    value: '351420',
    label: 'Escriv\u00e3o de pol\u00edcia'
  },
  {
    value: '351510',
    label: 'Taqu\u00edgrafo'
  },
  {
    value: '351505',
    label: 'T\u00e9cnico em secretariado'
  },
  {
    value: '351515',
    label: 'Estenotipista'
  },
  {
    value: '351610',
    label: 'T\u00e9cnico em higiene ocupacional'
  },
  {
    value: '351605',
    label: 'T\u00e9cnico em seguran\u00e7a do trabalho'
  },
  {
    value: '351705',
    label: 'Analista de seguros (t\u00e9cnico)'
  },
  {
    value: '351725',
    label: 'Inspetor de risco'
  },
  {
    value: '351740',
    label: 'T\u00e9cnico de seguros'
  },
  {
    value: '351735',
    label: 'T\u00e9cnico de resseguros'
  },
  {
    value: '351730',
    label: 'Inspetor de sinistros'
  },
  {
    value: '351720',
    label: 'Assistente t\u00e9cnico de seguros'
  },
  {
    value: '351715',
    label: 'Assistente comercial de seguros'
  },
  {
    value: '351710',
    label: 'Analista de sinistros'
  },
  {
    value: '351810',
    label: 'Investigador de pol\u00edcia'
  },
  {
    value: '351805',
    label: 'Detetive profissional'
  },
  {
    value: '351815',
    label: 'Papiloscopista policial'
  },
  {
    value: '351910',
    label: 'Agente t\u00e9cnico de intelig\u00eancia'
  },
  {
    value: '351905',
    label: 'Agente de intelig\u00eancia'
  },
  {
    value: '352205',
    label: 'Agente de defesa ambiental'
  },
  {
    value: '352210',
    label: 'Agente de sa\u00fade p\u00fablica'
  },
  {
    value: '352305',
    label: 'Metrologista'
  },
  {
    value: '352315',
    label: 'Agente fiscal metrol\u00f3gico'
  },
  {
    value: '352310',
    label: 'Agente fiscal de qualidade'
  },
  {
    value: '352320',
    label: 'Agente fiscal t\u00eaxtil'
  },
  {
    value: '352410',
    label: 'Avaliador de produtos do meio de comunica\u00e7\u00e3o'
  },
  {
    value: '352405',
    label: 'Agente de direitos autorais'
  },
  {
    value: '352420',
    label: 'T\u00e9cnico em direitos autorais'
  },
  {
    value: '353215',
    label: 'T\u00e9cnico de opera\u00e7\u00f5es e servi\u00e7os banc\u00e1rios - cr\u00e9dito rural'
  },
  {
    value: '353220',
    label: 'T\u00e9cnico de opera\u00e7\u00f5es e servi\u00e7os banc\u00e1rios - leasing'
  },
  {
    value: '353225',
    label: 'T\u00e9cnico de opera\u00e7\u00f5es e servi\u00e7os banc\u00e1rios - renda fixa e vari\u00e1vel'
  },
  {
    value: '353210',
    label: 'T\u00e9cnico de opera\u00e7\u00f5es e servi\u00e7os banc\u00e1rios - cr\u00e9dito imobili\u00e1rio'
  },
  {
    value: '353235',
    label: 'Chefe de servi\u00e7os banc\u00e1rios'
  },
  {
    value: '353230',
    label: 'Tesoureiro de banco'
  },
  {
    value: '353205',
    label: 'T\u00e9cnico de opera\u00e7\u00f5es e servi\u00e7os banc\u00e1rios - c\u00e2mbio'
  },
  {
    value: '354140',
    label: 'T\u00e9cnico em atendimento e vendas'
  },
  {
    value: '354135',
    label: 'T\u00e9cnico de vendas'
  },
  {
    value: '354130',
    label: 'Promotor de vendas especializado'
  },
  {
    value: '354125',
    label: 'Assistente de vendas'
  },
  {
    value: '354120',
    label: 'Agente de vendas de servi\u00e7os'
  },
  {
    value: '354145',
    label: 'Vendedor pracista'
  },
  {
    value: '354150',
    label: 'Propagandista de produtos famac\u00eauticos'
  },
  {
    value: '354205',
    label: 'Comprador'
  },
  {
    value: '354210',
    label: 'Supervisor de compras'
  },
  {
    value: '354305',
    label: 'Analista de exporta\u00e7\u00e3o e importa\u00e7\u00e3o'
  },
  {
    value: '354410',
    label: 'Avaliador de im\u00f3veis'
  },
  {
    value: '354415',
    label: 'Avaliador de bens m\u00f3veis'
  },
  {
    value: '354405',
    label: 'Leiloeiro'
  },
  {
    value: '354505',
    label: 'Corretor de seguros'
  },
  {
    value: '354605',
    label: 'Corretor de im\u00f3veis'
  },
  {
    value: '354705',
    label: 'Representante comercial aut\u00f4nomo'
  },
  {
    value: '354820',
    label: 'Organizador de evento'
  },
  {
    value: '354815',
    label: 'Agente de viagem'
  },
  {
    value: '354810',
    label: 'Operador de turismo'
  },
  {
    value: '354805',
    label: 'T\u00e9cnico em turismo'
  },
  {
    value: '354825',
    label: 'Cerimonialista'
  },
  {
    value: '371105',
    label: 'Auxiliar de biblioteca'
  },
  {
    value: '371110',
    label: 'T\u00e9cnico em biblioteconomia'
  },
  {
    value: '371210',
    label: 'T\u00e9cnico em museologia'
  },
  {
    value: '371205',
    label: 'Colecionador de selos e moedas'
  },
  {
    value: '371305',
    label: 'T\u00e9cnico em programa\u00e7\u00e3o visual'
  },
  {
    value: '371310',
    label: 'T\u00e9cnico gr\u00e1fico'
  },
  {
    value: '371405',
    label: 'Recreador de acantolabelnto'
  },
  {
    value: '371410',
    label: 'Recreador'
  },
  {
    value: '372105',
    label: 'Diretor de fotografia'
  },
  {
    value: '372110',
    label: 'Iluminador (televis\u00e3o)'
  },
  {
    value: '372115',
    label: 'Operador de c\u00e2mera de televis\u00e3o'
  },
  {
    value: '372205',
    label: 'Operador de rede de teleprocessamento'
  },
  {
    value: '372210',
    label: 'Radiotelegrafista'
  },
  {
    value: '373105',
    label: 'Operador de \u00e1udio de continuidade (r\u00e1dio)'
  },
  {
    value: '373110',
    label: 'Operador de central de r\u00e1dio'
  },
  {
    value: '373115',
    label: 'Operador de externa (r\u00e1dio)'
  },
  {
    value: '373120',
    label: 'Operador de grava\u00e7\u00e3o de r\u00e1dio'
  },
  {
    value: '373125',
    label: 'Operador de transmissor de r\u00e1dio'
  },
  {
    value: '373205',
    label:
      'T\u00e9cnico em opera\u00e7\u00e3o de equipamentos de produ\u00e7\u00e3o para televis\u00e3o  e produtoras de v\u00eddeo'
  },
  {
    value: '373210',
    label: 'T\u00e9cnico em opera\u00e7\u00e3o de equipamento de exibi\u00e7\u00e3o de televis\u00e3o'
  },
  {
    value: '373215',
    label: 'T\u00e9cnico em opera\u00e7\u00e3o de equipamentos de transmiss\u00e3o/recep\u00e7\u00e3o de televis\u00e3o'
  },
  {
    value: '373220',
    label: 'Supervisor t\u00e9cnico operacional de sistemas de televis\u00e3o e produtoras de v\u00eddeo'
  },
  {
    value: '374120',
    label: 'Projetista de som'
  },
  {
    value: '374125',
    label: 'T\u00e9cnico em sonoriza\u00e7\u00e3o'
  },
  {
    value: '374115',
    label: 'T\u00e9cnico em masteriza\u00e7\u00e3o de \u00e1udio'
  },
  {
    value: '374110',
    label: 'T\u00e9cnico em instala\u00e7\u00e3o de equipamentos de \u00e1udio'
  },
  {
    value: '374105',
    label: 'T\u00e9cnico em grava\u00e7\u00e3o de \u00e1udio'
  },
  {
    value: '374145',
    label: 'Dj (disc jockey)'
  },
  {
    value: '374140',
    label: 'Microfonista'
  },
  {
    value: '374135',
    label: 'Projetista de sistemas de \u00e1udio'
  },
  {
    value: '374130',
    label: 'T\u00e9cnico em mixagem de \u00e1udio'
  },
  {
    value: '374205',
    label: 'Cenot\u00e9cnico (cinema, v\u00eddeo, televis\u00e3o, teatro e espet\u00e1culos)'
  },
  {
    value: '374210',
    label: 'Maquinista de cinema e v\u00eddeo'
  },
  {
    value: '374215',
    label: 'Maquinista de teatro e espet\u00e1culos'
  },
  {
    value: '374310',
    label: 'Operador-mantenedor de projetor cinematogr\u00e1fico'
  },
  {
    value: '374305',
    label: 'Operador de projetor cinematogr\u00e1fico'
  },
  {
    value: '374415',
    label: 'Finalizador de v\u00eddeo'
  },
  {
    value: '374410',
    label: 'Finalizador de filmes'
  },
  {
    value: '374420',
    label: 'Montador de filmes'
  },
  {
    value: '374405',
    label: 'Editor de tv  e v\u00eddeo'
  },
  {
    value: '375105',
    label: 'Designer de interiores'
  },
  {
    value: '375120',
    label: 'Decorador de eventos'
  },
  {
    value: '375115',
    label: 'Visual merchandiser'
  },
  {
    value: '375110',
    label: 'Designer de vitrines'
  },
  {
    value: '376105',
    label: 'Dan\u00e7arino tradicional'
  },
  {
    value: '376110',
    label: 'Dan\u00e7arino popular'
  },
  {
    value: '376250',
    label: 'Titeriteiro'
  },
  {
    value: '376255',
    label: 'Trapezista'
  },
  {
    value: '376245',
    label: 'Palha\u00e7o'
  },
  {
    value: '376240',
    label: 'Malabarista'
  },
  {
    value: '376235',
    label: 'M\u00e1gico'
  },
  {
    value: '376230',
    label: 'Equilibrista'
  },
  {
    value: '376225',
    label: 'Domador de animais (circense)'
  },
  {
    value: '376220',
    label: 'Contorcionista'
  },
  {
    value: '376215',
    label: 'Artista de circo (outros)'
  },
  {
    value: '376210',
    label: 'Artista a\u00e9reo'
  },
  {
    value: '376205',
    label: 'Acrobata'
  },
  {
    value: '376330',
    label: 'Mestre de cerimonias'
  },
  {
    value: '376315',
    label: 'Apresentador de programas de r\u00e1dio'
  },
  {
    value: '376320',
    label: 'Apresentador de programas de televis\u00e3o'
  },
  {
    value: '376305',
    label: 'Apresentador de eventos'
  },
  {
    value: '376310',
    label: 'Apresentador de festas populares'
  },
  {
    value: '376325',
    label: 'Apresentador de circo'
  },
  {
    value: '376410',
    label: 'Modelo de modas'
  },
  {
    value: '376415',
    label: 'Modelo publicit\u00e1rio'
  },
  {
    value: '376405',
    label: 'Modelo art\u00edstico'
  },
  {
    value: '377135',
    label: 'Piloto de competi\u00e7\u00e3o automobil\u00edstica'
  },
  {
    value: '377140',
    label: 'Profissional de atletismo'
  },
  {
    value: '377145',
    label: 'Pugilista'
  },
  {
    value: '377105',
    label: 'Atleta profissional (outras modalidades)'
  },
  {
    value: '377110',
    label: 'Atleta profissional de futebol'
  },
  {
    value: '377115',
    label: 'Atleta profissional de golfe'
  },
  {
    value: '377120',
    label: 'Atleta profissional de luta'
  },
  {
    value: '377125',
    label: 'Atleta profissional de t\u00eanis'
  },
  {
    value: '377130',
    label: 'J\u00f3quei'
  },
  {
    value: '377205',
    label: '\u00c1rbitro desportivo'
  },
  {
    value: '377210',
    label: '\u00c1rbitro de atletismo'
  },
  {
    value: '377215',
    label: '\u00c1rbitro de basquete'
  },
  {
    value: '377220',
    label: '\u00c1rbitro de futebol'
  },
  {
    value: '377245',
    label: '\u00c1rbitro de v\u00f4lei'
  },
  {
    value: '377230',
    label: '\u00c1rbitro de jud\u00f4'
  },
  {
    value: '377235',
    label: '\u00c1rbitro de karat\u00ea'
  },
  {
    value: '377240',
    label: '\u00c1rbitro de pol\u00f3 aqu\u00e1tico'
  },
  {
    value: '377225',
    label: '\u00c1rbitro de futebol de sal\u00e3o'
  },
  {
    value: '391105',
    label: 'Cronoanalista'
  },
  {
    value: '391110',
    label: 'Cronometrista'
  },
  {
    value: '391115',
    label: 'Controlador de entrada e sa\u00edda'
  },
  {
    value: '391120',
    label: 'Planejista'
  },
  {
    value: '391125',
    label: 'T\u00e9cnico de planejamento de produ\u00e7\u00e3o'
  },
  {
    value: '391130',
    label: 'T\u00e9cnico de planejamento e programa\u00e7\u00e3o da manuten\u00e7\u00e3o'
  },
  {
    value: '391135',
    label: 'T\u00e9cnico de mat\u00e9ria-prima e material'
  },
  {
    value: '391225',
    label: 'Escolhedor de papel'
  },
  {
    value: '391230',
    label: 'T\u00e9cnico operacional de servi\u00e7os de correios'
  },
  {
    value: '391205',
    label: 'Inspetor de qualidade'
  },
  {
    value: '391210',
    label: 'T\u00e9cnico de garantia da qualidade'
  },
  {
    value: '391215',
    label: 'Operador de inspe\u00e7\u00e3o de qualidade'
  },
  {
    value: '391220',
    label: 'T\u00e9cnico de painel de controle'
  },
  {
    value: '395110',
    label: 'T\u00e9cnico de apoio em pesquisa e desenvolvimento agropecu\u00e1rio florestal'
  },
  {
    value: '395105',
    label: 'T\u00e9cnico de apoio em pesquisa e desenvolvimento (exceto agropecu\u00e1rio e florestal)'
  },
  {
    value: '410105',
    label: 'Supervisor administrativo'
  },
  {
    value: '410225',
    label: 'Supervisor de cr\u00e9dito e cobran\u00e7a'
  },
  {
    value: '410220',
    label: 'Supervisor de controle patrimonial'
  },
  {
    value: '410215',
    label: 'Supervisor de contas a pagar'
  },
  {
    value: '410235',
    label: 'Supervisor de tesouraria'
  },
  {
    value: '410205',
    label: 'Supervisor de almoxarifado'
  },
  {
    value: '410240',
    label: 'Supervisor de log\u00edstica'
  },
  {
    value: '410230',
    label: 'Supervisor de or\u00e7amento'
  },
  {
    value: '410210',
    label: 'Supervisor de c\u00e2mbio'
  },
  {
    value: '411050',
    label: 'Agente de microcr\u00e9dito'
  },
  {
    value: '411005',
    label: 'Auxiliar de escrit\u00f3rio'
  },
  {
    value: '411010',
    label: 'Assistente administrativo'
  },
  {
    value: '411015',
    label: 'Atendente de judici\u00e1rio'
  },
  {
    value: '411020',
    label: 'Auxiliar de judici\u00e1rio'
  },
  {
    value: '411025',
    label: 'Auxiliar de cart\u00f3rio'
  },
  {
    value: '411030',
    label: 'Auxiliar de pessoal'
  },
  {
    value: '411035',
    label: 'Auxiliar de estat\u00edstica'
  },
  {
    value: '411040',
    label: 'Auxiliar de seguros'
  },
  {
    value: '411045',
    label: 'Auxiliar de servi\u00e7os de importa\u00e7\u00e3o e exporta\u00e7\u00e3o'
  },
  {
    value: '412105',
    label: 'Datil\u00f3grafo'
  },
  {
    value: '412110',
    label: 'Digitador'
  },
  {
    value: '412115',
    label: 'Operador de mensagens de telecomunica\u00e7\u00f5es (correios)'
  },
  {
    value: '412120',
    label: 'Supervisor de digita\u00e7\u00e3o e opera\u00e7\u00e3o'
  },
  {
    value: '412205',
    label: 'Cont\u00ednuo'
  },
  {
    value: '413105',
    label: 'Analista de folha de pagamento'
  },
  {
    value: '413110',
    label: 'Auxiliar de contabilidade'
  },
  {
    value: '413115',
    label: 'Auxiliar de faturamento'
  },
  {
    value: '413205',
    label: 'Atendente de ag\u00eancia'
  },
  {
    value: '413210',
    label: 'Caixa de banco'
  },
  {
    value: '413215',
    label: 'Compensador de banco'
  },
  {
    value: '413220',
    label: 'Conferente de servi\u00e7os banc\u00e1rios'
  },
  {
    value: '413225',
    label: 'Escritur\u00e1rio de banco'
  },
  {
    value: '413230',
    label: 'Operador de cobran\u00e7a banc\u00e1ria'
  },
  {
    value: '414125',
    label: 'Estoquista'
  },
  {
    value: '414135',
    label: 'Expedidor de mercadorias'
  },
  {
    value: '414140',
    label: 'Auxiliar de logistica'
  },
  {
    value: '414105',
    label: 'Almoxarife'
  },
  {
    value: '414110',
    label: 'Armazenista'
  },
  {
    value: '414115',
    label: 'Balanceiro'
  },
  {
    value: '414120',
    label: 'Conferente mercadoria (exceto carga e descarga)'
  },
  {
    value: '414210',
    label: 'Apontador de produ\u00e7\u00e3o'
  },
  {
    value: '414205',
    label: 'Apontador de m\u00e3o-de-obra'
  },
  {
    value: '414215',
    label: 'Conferente de carga e descarga'
  },
  {
    value: '415125',
    label: 'Kardexista'
  },
  {
    value: '415130',
    label: 'Operador de m\u00e1quina copiadora (exceto operador de gr\u00e1fica r\u00e1pida)'
  },
  {
    value: '415120',
    label: 'Fitotec\u00e1rio'
  },
  {
    value: '415105',
    label: 'Arquivista de documentos'
  },
  {
    value: '415115',
    label: 'Codificador de dados'
  },
  {
    value: '415205',
    label: 'Carteiro'
  },
  {
    value: '415215',
    label: 'Entregador de publica\u00e7\u00f5es'
  },
  {
    value: '415210',
    label: 'Operador de triagem e transbordo'
  },
  {
    value: '420135',
    label: 'Supervisor de telemarketing e atendimento'
  },
  {
    value: '420130',
    label: 'Supervisor de telefonistas'
  },
  {
    value: '420125',
    label: 'Supervisor de recepcionistas'
  },
  {
    value: '420120',
    label: 'Supervisor de entrevistadores e recenseadores'
  },
  {
    value: '420115',
    label: 'Supervisor de coletadores de apostas e de jogos'
  },
  {
    value: '420105',
    label: 'Supervisor de caixas e bilheteiros (exceto caixa de banco)'
  },
  {
    value: '420110',
    label: 'Supervisor de cobran\u00e7a'
  },
  {
    value: '421120',
    label: 'Emissor de passagens'
  },
  {
    value: '421125',
    label: 'Operador de caixa'
  },
  {
    value: '421115',
    label: 'Bilheteiro no servi\u00e7o de divers\u00f5es'
  },
  {
    value: '421110',
    label: 'Bilheteiro de transportes coletivos'
  },
  {
    value: '421105',
    label: 'Atendente comercial (ag\u00eancia postal)'
  },
  {
    value: '421210',
    label: 'Recebedor de apostas (turfe)'
  },
  {
    value: '421205',
    label: 'Recebedor de apostas (loteria)'
  },
  {
    value: '421315',
    label: 'Localizador (cobrador)'
  },
  {
    value: '421310',
    label: 'Cobrador interno'
  },
  {
    value: '421305',
    label: 'Cobrador externo'
  },
  {
    value: '422125',
    label: 'Recepcionista de banco'
  },
  {
    value: '422120',
    label: 'Recepcionista de hotel'
  },
  {
    value: '422115',
    label: 'Recepcionista de seguro sa\u00fade'
  },
  {
    value: '422130',
    label: 'Concierge'
  },
  {
    value: '422105',
    label: 'Recepcionista, em geral'
  },
  {
    value: '422110',
    label: 'Recepcionista de consult\u00f3rio m\u00e9dico ou dent\u00e1rio'
  },
  {
    value: '422220',
    label: 'Operador de r\u00e1dio-chamada'
  },
  {
    value: '422205',
    label: 'Telefonista'
  },
  {
    value: '422210',
    label: 'Teleoperador'
  },
  {
    value: '422215',
    label: 'Monitor de teleatendimento'
  },
  {
    value: '422315',
    label: 'Operador de telemarketing receptivo'
  },
  {
    value: '422320',
    label: 'Operador de telemarketing t\u00e9cnico'
  },
  {
    value: '422310',
    label: 'Operador de telemarketing ativo e receptivo'
  },
  {
    value: '422305',
    label: 'Operador de telemarketing ativo'
  },
  {
    value: '423105',
    label: 'Despachante documentalista'
  },
  {
    value: '423110',
    label: 'Despachante de tr\u00e2nsito'
  },
  {
    value: '424120',
    label: 'Entrevistador de pre\u00e7os'
  },
  {
    value: '424125',
    label: 'Escritur\u00e1rio  em  estat\u00edstica'
  },
  {
    value: '424130',
    label: 'Entrevistador social'
  },
  {
    value: '424105',
    label: 'Entrevistador censit\u00e1rio e de pesquisas amostrais'
  },
  {
    value: '424110',
    label: 'Entrevistador de pesquisa de opini\u00e3o e m\u00eddia'
  },
  {
    value: '424115',
    label: 'Entrevistador de pesquisas de mercado'
  },
  {
    value: '424210',
    label: 'Aplicador de provas (concurso, avalia\u00e7\u00e3o,exame)'
  },
  {
    value: '424205',
    label: 'Coordenador de provas (concurso, avalia\u00e7\u00e3o, exame)'
  },
  {
    value: '510105',
    label: 'Supervisor de transportes'
  },
  {
    value: '510110',
    label: 'Administrador de edif\u00edcios'
  },
  {
    value: '510115',
    label: 'Supervisor de andar'
  },
  {
    value: '510120',
    label: 'Chefe de portaria de hotel'
  },
  {
    value: '510130',
    label: 'Chefe de bar'
  },
  {
    value: '510135',
    label: 'Ma\u00eetre'
  },
  {
    value: '510205',
    label: 'Supervisor de lavanderia'
  },
  {
    value: '510305',
    label: 'Supervisor de bombeiros'
  },
  {
    value: '510310',
    label: 'Supervisor de vigilantes'
  },
  {
    value: '511115',
    label: 'Taifeiro (exceto militares)'
  },
  {
    value: '511110',
    label: 'Comiss\u00e1rio de trem'
  },
  {
    value: '511105',
    label: 'Comiss\u00e1rio de v\u00f4o'
  },
  {
    value: '511220',
    label: 'Bilheteiro (esta\u00e7\u00f5es de metr\u00f4, ferrovi\u00e1rias e assemelhadas)'
  },
  {
    value: '511205',
    label: 'Fiscal de transportes coletivos (exceto trem)'
  },
  {
    value: '511210',
    label: 'Despachante de transportes coletivos (exceto trem)'
  },
  {
    value: '511215',
    label: 'Cobrador de transportes coletivos (exceto trem)'
  },
  {
    value: '511405',
    label: 'Guia de turismo'
  },
  {
    value: '511510',
    label: 'Condutor de turismo de pesca'
  },
  {
    value: '511505',
    label: 'Condutor de turismo de aventura'
  },
  {
    value: '512105',
    label: 'Empregado  dom\u00e9stico  nos servi\u00e7os gerais'
  },
  {
    value: '512120',
    label: 'Empregado dom\u00e9stico diarista'
  },
  {
    value: '512115',
    label: 'Empregado dom\u00e9stico  faxineiro'
  },
  {
    value: '512110',
    label: 'Empregado dom\u00e9stico  arrumador'
  },
  {
    value: '513105',
    label: 'Mordomo de resid\u00eancia'
  },
  {
    value: '513110',
    label: 'Mordomo de hotelaria'
  },
  {
    value: '513115',
    label: 'Governanta de hotelaria'
  },
  {
    value: '513205',
    label: 'Cozinheiro geral'
  },
  {
    value: '513225',
    label: 'Cozinheiro de embarca\u00e7\u00f5es'
  },
  {
    value: '513220',
    label: 'Cozinheiro de hospital'
  },
  {
    value: '513215',
    label: 'Cozinheiro industrial'
  },
  {
    value: '513210',
    label: 'Cozinheiro do servi\u00e7o dom\u00e9stico'
  },
  {
    value: '513325',
    label: 'Guarda-roupeira de cinema'
  },
  {
    value: '513320',
    label: 'Camareiro de embarca\u00e7\u00f5es'
  },
  {
    value: '513315',
    label: 'Camareiro  de hotel'
  },
  {
    value: '513310',
    label: 'Camareira de televis\u00e3o'
  },
  {
    value: '513305',
    label: 'Camareira de teatro'
  },
  {
    value: '513440',
    label: 'Barista'
  },
  {
    value: '513430',
    label: 'Copeiro de hospital'
  },
  {
    value: '513425',
    label: 'Copeiro'
  },
  {
    value: '513420',
    label: 'Barman'
  },
  {
    value: '513415',
    label: 'Cumim'
  },
  {
    value: '513410',
    label: 'Gar\u00e7om (servi\u00e7os de vinhos)'
  },
  {
    value: '513405',
    label: 'Gar\u00e7om'
  },
  {
    value: '513435',
    label: 'Atendente de lanchonete'
  },
  {
    value: '513505',
    label: 'Auxiliar nos servi\u00e7os de alimenta\u00e7\u00e3o'
  },
  {
    value: '513605',
    label: 'Churrasqueiro'
  },
  {
    value: '513610',
    label: 'Pizzaiolo'
  },
  {
    value: '513615',
    label: 'Sushiman'
  },
  {
    value: '514105',
    label: 'Ascensorista'
  },
  {
    value: '514120',
    label: 'Zelador de edif\u00edcio'
  },
  {
    value: '514115',
    label: 'Sacrist\u00e3o'
  },
  {
    value: '514110',
    label: 'Garagista'
  },
  {
    value: '514215',
    label: 'Varredor de rua'
  },
  {
    value: '514225',
    label: 'Trabalhador de servi\u00e7os de limpeza e conserva\u00e7\u00e3o de \u00e1reas p\u00fablicas'
  },
  {
    value: '514205',
    label: 'Coletor de lixo domiciliar'
  },
  {
    value: '514230',
    label: 'Coletor de res\u00edduos s\u00f3lidos de servi\u00e7os de sa\u00fade'
  },
  {
    value: '514305',
    label: 'Limpador de vidros'
  },
  {
    value: '514310',
    label: 'Auxiliar de manuten\u00e7\u00e3o predial'
  },
  {
    value: '514315',
    label: 'Limpador de fachadas'
  },
  {
    value: '514320',
    label: 'Faxineiro'
  },
  {
    value: '514330',
    label: 'Limpador de piscinas'
  },
  {
    value: '514325',
    label: 'Trabalhador da manuten\u00e7\u00e3o de edifica\u00e7\u00f5es'
  },
  {
    value: '515140',
    label: 'Agente de combate \u00e0s endemias'
  },
  {
    value: '515105',
    label: 'Agente comunit\u00e1rio de sa\u00fade'
  },
  {
    value: '515110',
    label: 'Atendente de enfermagem'
  },
  {
    value: '515135',
    label: 'Socorrista (exceto m\u00e9dicos e enfermeiros)'
  },
  {
    value: '515120',
    label: 'Visitador sanit\u00e1rio'
  },
  {
    value: '515125',
    label: 'Agente ind\u00edgena de sa\u00fade'
  },
  {
    value: '515130',
    label: 'Agente ind\u00edgena de saneamento'
  },
  {
    value: '515115',
    label: 'Parteira leiga'
  },
  {
    value: '515205',
    label: 'Auxiliar de banco de sangue'
  },
  {
    value: '515210',
    label: 'Auxiliar de farm\u00e1cia de manipula\u00e7\u00e3o'
  },
  {
    value: '515215',
    label: 'Auxiliar de laborat\u00f3rio de an\u00e1lises cl\u00ednicas'
  },
  {
    value: '515220',
    label: 'Auxiliar de laborat\u00f3rio de imunobiol\u00f3gicos'
  },
  {
    value: '515225',
    label: 'Auxiliar de produ\u00e7\u00e3o farmac\u00eautica'
  },
  {
    value: '515310',
    label: 'Agente de a\u00e7\u00e3o social'
  },
  {
    value: '515325',
    label: 'S\u00f3cioeducador'
  },
  {
    value: '515320',
    label: 'Conselheiro tutelar'
  },
  {
    value: '515315',
    label: 'Monitor de dependente qu\u00edmico'
  },
  {
    value: '515305',
    label: 'Educador social'
  },
  {
    value: '515330',
    label: 'Monitor de ressocializa\u00e7\u00e3o prisional'
  },
  {
    value: '516110',
    label: 'Cabeleireiro'
  },
  {
    value: '516140',
    label: 'Pedicure'
  },
  {
    value: '516105',
    label: 'Barbeiro'
  },
  {
    value: '516120',
    label: 'Manicure'
  },
  {
    value: '516125',
    label: 'Maquiador'
  },
  {
    value: '516130',
    label: 'Maquiador de caracteriza\u00e7\u00e3o'
  },
  {
    value: '516220',
    label: 'Cuidador em sa\u00fade'
  },
  {
    value: '516215',
    label: 'M\u00e3e social'
  },
  {
    value: '516205',
    label: 'Bab\u00e1'
  },
  {
    value: '516210',
    label: 'Cuidador de idosos'
  },
  {
    value: '516305',
    label: 'Lavadeiro, em geral'
  },
  {
    value: '516310',
    label: 'Lavador de roupas  a maquina'
  },
  {
    value: '516345',
    label: 'Auxiliar de lavanderia'
  },
  {
    value: '516340',
    label: 'Atendente de lavanderia'
  },
  {
    value: '516335',
    label: 'Conferente-expedidor de roupas (lavanderias)'
  },
  {
    value: '516330',
    label: 'Tingidor de roupas'
  },
  {
    value: '516325',
    label: 'Passador de roupas em geral'
  },
  {
    value: '516315',
    label: 'Lavador de artefatos de tape\u00e7aria'
  },
  {
    value: '516320',
    label: 'Limpador a seco, \u00e0 m\u00e1quina'
  },
  {
    value: '516415',
    label: 'Passador de roupas, \u00e0 m\u00e3o'
  },
  {
    value: '516410',
    label: 'Limpador de roupas a seco, \u00e0 m\u00e3o'
  },
  {
    value: '516405',
    label: 'Lavador de roupas'
  },
  {
    value: '516505',
    label: 'Agente funer\u00e1rio'
  },
  {
    value: '516605',
    label: 'Operador de forno (servi\u00e7os funer\u00e1rios)'
  },
  {
    value: '516610',
    label: 'Sepultador'
  },
  {
    value: '516705',
    label: 'Astr\u00f3logo'
  },
  {
    value: '516710',
    label: 'Numer\u00f3logo'
  },
  {
    value: '516805',
    label: 'Esot\u00e9rico'
  },
  {
    value: '516810',
    label: 'Paranormal'
  },
  {
    value: '517110',
    label: 'Bombeiro civil'
  },
  {
    value: '517115',
    label: 'Salva-vidas'
  },
  {
    value: '517105',
    label: 'Bombeiro de aer\u00f3dromo'
  },
  {
    value: '517220',
    label: 'Agente de tr\u00e2nsito'
  },
  {
    value: '517210',
    label: 'Policial rodovi\u00e1rio federal'
  },
  {
    value: '517205',
    label: 'Agente de pol\u00edcia federal'
  },
  {
    value: '517215',
    label: 'Guarda-civil municipal'
  },
  {
    value: '517325',
    label: 'Vigia portu\u00e1rio'
  },
  {
    value: '517335',
    label: 'Guarda portu\u00e1rio'
  },
  {
    value: '517330',
    label: 'Vigilante'
  },
  {
    value: '517320',
    label: 'Vigia florestal'
  },
  {
    value: '517315',
    label: 'Agente de seguran\u00e7a penitenci\u00e1ria'
  },
  {
    value: '517310',
    label: 'Agente de seguran\u00e7a'
  },
  {
    value: '517305',
    label: 'Agente de prote\u00e7\u00e3o de aeroporto'
  },
  {
    value: '517420',
    label: 'Vigia'
  },
  {
    value: '517425',
    label: 'Fiscal de loja'
  },
  {
    value: '517405',
    label: 'Porteiro (hotel)'
  },
  {
    value: '517410',
    label: 'Porteiro de edif\u00edcios'
  },
  {
    value: '517415',
    label: 'Porteiro de locais de divers\u00e3o'
  },
  {
    value: '519115',
    label: 'Mototaxista'
  },
  {
    value: '519105',
    label: 'Ciclista mensageiro'
  },
  {
    value: '519110',
    label: 'Motofretista'
  },
  {
    value: '519210',
    label: 'Selecionador de material recicl\u00e1vel'
  },
  {
    value: '519215',
    label: 'Operador de prensa de material recicl\u00e1vel'
  },
  {
    value: '519205',
    label: 'Catador de material recicl\u00e1vel'
  },
  {
    value: '519305',
    label: 'Auxiliar de veterin\u00e1rio'
  },
  {
    value: '519315',
    label: 'Banhista de animais dom\u00e9sticos'
  },
  {
    value: '519320',
    label: 'Tosador de animais dom\u00e9sticos'
  },
  {
    value: '519310',
    label: 'Esteticista de animais dom\u00e9sticos'
  },
  {
    value: '519805',
    label: 'Profissional do sexo'
  },
  {
    value: '519945',
    label: 'Recepcionista de casas de espet\u00e1culos'
  },
  {
    value: '519940',
    label: 'Leiturista'
  },
  {
    value: '519930',
    label: 'Lavador de garrafas, vidros e outros utens\u00edlios'
  },
  {
    value: '519925',
    label: 'Guardador de ve\u00edculos'
  },
  {
    value: '519920',
    label: 'Gandula'
  },
  {
    value: '519915',
    label: 'Engraxate'
  },
  {
    value: '519910',
    label: 'Controlador de pragas'
  },
  {
    value: '519905',
    label: 'Cartazeiro'
  },
  {
    value: '519935',
    label: 'Lavador de ve\u00edculos'
  },
  {
    value: '520110',
    label: 'Supervisor de vendas comercial'
  },
  {
    value: '520105',
    label: 'Supervisor de vendas de servi\u00e7os'
  },
  {
    value: '521120',
    label: 'Demonstrador de mercadorias'
  },
  {
    value: '521125',
    label: 'Repositor de mercadorias'
  },
  {
    value: '521140',
    label: 'Atendente de lojas e mercados'
  },
  {
    value: '521135',
    label: 'Frentista'
  },
  {
    value: '521105',
    label: 'Vendedor em com\u00e9rcio atacadista'
  },
  {
    value: '521115',
    label: 'Promotor de vendas'
  },
  {
    value: '521110',
    label: 'Vendedor de com\u00e9rcio varejista'
  },
  {
    value: '521130',
    label: 'Atendente de farm\u00e1cia - balconista'
  },
  {
    value: '523115',
    label: 'Chaveiro'
  },
  {
    value: '523110',
    label: 'Instalador de som e acess\u00f3rios de ve\u00edculos'
  },
  {
    value: '523105',
    label: 'Instalador de cortinas e persianas, portas sanfonadas e boxe'
  },
  {
    value: '524105',
    label: 'Vendedor em domic\u00edlio'
  },
  {
    value: '524205',
    label: 'Feirante'
  },
  {
    value: '524210',
    label: 'Jornaleiro (em banca de jornal)'
  },
  {
    value: '524215',
    label: 'Vendedor  permission\u00e1rio'
  },
  {
    value: '524315',
    label: 'Baiana de acaraj\u00e9'
  },
  {
    value: '524305',
    label: 'Vendedor ambulante'
  },
  {
    value: '524310',
    label: 'Pipoqueiro ambulante'
  },
  {
    value: '611005',
    label: 'Produtor agropecu\u00e1rio, em geral'
  },
  {
    value: '612005',
    label: 'Produtor agr\u00edcola polivalente'
  },
  {
    value: '612120',
    label: 'Produtor de gram\u00edneas forrageiras'
  },
  {
    value: '612115',
    label: 'Produtor de cereais de inverno'
  },
  {
    value: '612105',
    label: 'Produtor de arroz'
  },
  {
    value: '612110',
    label: 'Produtor de cana-de-a\u00e7\u00facar'
  },
  {
    value: '612125',
    label: 'Produtor de milho e sorgo'
  },
  {
    value: '612210',
    label: 'Produtor de curau\u00e1'
  },
  {
    value: '612215',
    label: 'Produtor de juta'
  },
  {
    value: '612220',
    label: 'Produtor de rami'
  },
  {
    value: '612225',
    label: 'Produtor de sisal'
  },
  {
    value: '612205',
    label: 'Produtor de algod\u00e3o'
  },
  {
    value: '612315',
    label: 'Produtor na olericultura de talos, folhas e flores'
  },
  {
    value: '612320',
    label: 'Produtor na olericultura de frutos e sementes'
  },
  {
    value: '612310',
    label: 'Produtor na olericultura de ra\u00edzes, bulbos e tub\u00e9rculos'
  },
  {
    value: '612305',
    label: 'Produtor na olericultura de legumes'
  },
  {
    value: '612415',
    label: 'Produtor de forra\u00e7\u00f5es'
  },
  {
    value: '612405',
    label: 'Produtor de flores de corte'
  },
  {
    value: '612410',
    label: 'Produtor de flores em vaso'
  },
  {
    value: '612420',
    label: 'Produtor de plantas orlabelntais'
  },
  {
    value: '612510',
    label: 'Produtor de esp\u00e9cies frut\u00edferas rasteiras'
  },
  {
    value: '612505',
    label: 'Produtor de \u00e1rvores frut\u00edferas'
  },
  {
    value: '612515',
    label: 'Produtor de esp\u00e9cies frut\u00edferas trepadeiras'
  },
  {
    value: '612620',
    label: 'Produtor de fumo'
  },
  {
    value: '612625',
    label: 'Produtor de guaran\u00e1'
  },
  {
    value: '612610',
    label: 'Produtor de cacau'
  },
  {
    value: '612615',
    label: 'Produtor de erva-mate'
  },
  {
    value: '612605',
    label: 'Cafeicultor'
  },
  {
    value: '612730',
    label: 'Produtor da cultura de linho'
  },
  {
    value: '612725',
    label: 'Produtor da cultura de girassol'
  },
  {
    value: '612705',
    label: 'Produtor da cultura de amendoim'
  },
  {
    value: '612710',
    label: 'Produtor da cultura de canola'
  },
  {
    value: '612715',
    label: 'Produtor da cultura de coco-da-baia'
  },
  {
    value: '612720',
    label: 'Produtor da cultura de dend\u00ea'
  },
  {
    value: '612735',
    label: 'Produtor da cultura de mamona'
  },
  {
    value: '612740',
    label: 'Produtor da cultura de soja'
  },
  {
    value: '612810',
    label: 'Produtor de plantas arom\u00e1ticas e medicinais'
  },
  {
    value: '612805',
    label: 'Produtor de especiarias'
  },
  {
    value: '613010',
    label: 'Criador de animais dom\u00e9sticos'
  },
  {
    value: '613005',
    label: 'Criador em pecu\u00e1ria polivalente'
  },
  {
    value: '613105',
    label: 'Criador de asininos e muares'
  },
  {
    value: '613130',
    label: 'Criador de eq\u00fc\u00ednos'
  },
  {
    value: '613125',
    label: 'Criador de bubalinos (leite)'
  },
  {
    value: '613120',
    label: 'Criador de bubalinos (corte)'
  },
  {
    value: '613115',
    label: 'Criador de bovinos (leite)'
  },
  {
    value: '613110',
    label: 'Criador de bovinos (corte)'
  },
  {
    value: '613205',
    label: 'Criador de caprinos'
  },
  {
    value: '613215',
    label: 'Criador de su\u00ednos'
  },
  {
    value: '613210',
    label: 'Criador de ovinos'
  },
  {
    value: '613310',
    label: 'Cunicultor'
  },
  {
    value: '613305',
    label: 'Avicultor'
  },
  {
    value: '613415',
    label: 'Minhocultor'
  },
  {
    value: '613410',
    label: 'Criador de animais produtores de veneno'
  },
  {
    value: '613405',
    label: 'Apicultor'
  },
  {
    value: '613420',
    label: 'Sericultor'
  },
  {
    value: '620105',
    label: 'Supervisor de explora\u00e7\u00e3o agr\u00edcola'
  },
  {
    value: '620110',
    label: 'Supervisor de explora\u00e7\u00e3o agropecu\u00e1ria'
  },
  {
    value: '620115',
    label: 'Supervisor de explora\u00e7\u00e3o pecu\u00e1ria'
  },
  {
    value: '621005',
    label: 'Trabalhador agropecu\u00e1rio em geral'
  },
  {
    value: '622015',
    label: 'Trabalhador na produ\u00e7\u00e3o de mudas e sementes'
  },
  {
    value: '622010',
    label: 'Jardineiro'
  },
  {
    value: '622005',
    label: 'Caseiro (agricultura)'
  },
  {
    value: '622020',
    label: 'Trabalhador volante da agricultura'
  },
  {
    value: '622120',
    label: 'Trabalhador da cultura de trigo, aveia, cevada e triticale'
  },
  {
    value: '622115',
    label: 'Trabalhador da cultura de milho e sorgo'
  },
  {
    value: '622105',
    label: 'Trabalhador da cultura de arroz'
  },
  {
    value: '622110',
    label: 'Trabalhador da cultura de cana-de-a\u00e7\u00facar'
  },
  {
    value: '622210',
    label: 'Trabalhador da cultura de sisal'
  },
  {
    value: '622205',
    label: 'Trabalhador da cultura de algod\u00e3o'
  },
  {
    value: '622215',
    label: 'Trabalhador da cultura do rami'
  },
  {
    value: '622310',
    label: 'Trabalhador na olericultura (legumes)'
  },
  {
    value: '622305',
    label: 'Trabalhador na olericultura (frutos e sementes)'
  },
  {
    value: '622315',
    label: 'Trabalhador na olericultura (ra\u00edzes, bulbos e tub\u00e9rculos)'
  },
  {
    value: '622320',
    label: 'Trabalhador na olericultura (talos, folhas e flores)'
  },
  {
    value: '622405',
    label: 'Trabalhador no cultivo de flores e folhagens de corte'
  },
  {
    value: '622410',
    label: 'Trabalhador no cultivo de flores em vaso'
  },
  {
    value: '622415',
    label: 'Trabalhador no cultivo de forra\u00e7\u00f5es'
  },
  {
    value: '622420',
    label: 'Trabalhador no cultivo de mudas'
  },
  {
    value: '622425',
    label: 'Trabalhador no cultivo de plantas orlabelntais'
  },
  {
    value: '622505',
    label: 'Trabalhador no cultivo de \u00e1rvores frut\u00edferas'
  },
  {
    value: '622510',
    label: 'Trabalhador no cultivo de esp\u00e9cies frut\u00edferas rasteiras'
  },
  {
    value: '622515',
    label: 'Trabalhador no cultivo de trepadeiras frut\u00edferas'
  },
  {
    value: '622615',
    label: 'Trabalhador da cultura de erva-mate'
  },
  {
    value: '622620',
    label: 'Trabalhador da cultura de fumo'
  },
  {
    value: '622625',
    label: 'Trabalhador da cultura de guaran\u00e1'
  },
  {
    value: '622610',
    label: 'Trabalhador da cultura de caf\u00e9'
  },
  {
    value: '622605',
    label: 'Trabalhador da cultura de cacau'
  },
  {
    value: '622715',
    label: 'Trabalhador na cultura de coco-da-ba\u00eda'
  },
  {
    value: '622710',
    label: 'Trabalhador na cultura de canola'
  },
  {
    value: '622725',
    label: 'Trabalhador na cultura de mamona'
  },
  {
    value: '622730',
    label: 'Trabalhador na cultura de soja'
  },
  {
    value: '622735',
    label: 'Trabalhador na cultura do girassol'
  },
  {
    value: '622740',
    label: 'Trabalhador na cultura do linho'
  },
  {
    value: '622705',
    label: 'Trabalhador na cultura de amendoim'
  },
  {
    value: '622720',
    label: 'Trabalhador na cultura de dend\u00ea'
  },
  {
    value: '622810',
    label: 'Trabalhador da cultura de plantas arom\u00e1ticas e medicinais'
  },
  {
    value: '622805',
    label: 'Trabalhador da cultura de especiarias'
  },
  {
    value: '623025',
    label: 'Casqueador de animais'
  },
  {
    value: '623030',
    label: 'Ferrador de animais'
  },
  {
    value: '623015',
    label: 'Trabalhador de pecu\u00e1ria polivalente'
  },
  {
    value: '623010',
    label: 'Inseminador'
  },
  {
    value: '623020',
    label: 'Tratador de animais'
  },
  {
    value: '623005',
    label: 'Adestrador de animais'
  },
  {
    value: '623105',
    label: 'Trabalhador da pecu\u00e1ria (asininos e muares)'
  },
  {
    value: '623110',
    label: 'Trabalhador da pecu\u00e1ria (bovinos corte)'
  },
  {
    value: '623120',
    label: 'Trabalhador da pecu\u00e1ria (bubalinos)'
  },
  {
    value: '623125',
    label: 'Trabalhador da pecu\u00e1ria (eq\u00fcinos)'
  },
  {
    value: '623115',
    label: 'Trabalhador da pecu\u00e1ria (bovinos leite)'
  },
  {
    value: '623210',
    label: 'Trabalhador da ovinocultura'
  },
  {
    value: '623215',
    label: 'Trabalhador da suinocultura'
  },
  {
    value: '623205',
    label: 'Trabalhador da caprinocultura'
  },
  {
    value: '623320',
    label: 'Trabalhador da cunicultura'
  },
  {
    value: '623315',
    label: 'Operador de incubadora'
  },
  {
    value: '623310',
    label: 'Trabalhador da avicultura de postura'
  },
  {
    value: '623305',
    label: 'Trabalhador da avicultura de corte'
  },
  {
    value: '623325',
    label: 'Sexador'
  },
  {
    value: '623405',
    label: 'Trabalhador em criat\u00f3rios de animais produtores de veneno'
  },
  {
    value: '623415',
    label: 'Trabalhador na minhocultura'
  },
  {
    value: '623420',
    label: 'Trabalhador na sericicultura'
  },
  {
    value: '623410',
    label: 'Trabalhador na apicultura'
  },
  {
    value: '630110',
    label: 'Supervisor da \u00e1rea florestal'
  },
  {
    value: '630105',
    label: 'Supervisor da aq\u00fcicultura'
  },
  {
    value: '631015',
    label: 'Pescador artesanal de lagostas'
  },
  {
    value: '631005',
    label: 'Catador de caranguejos e siris'
  },
  {
    value: '631010',
    label: 'Catador de mariscos'
  },
  {
    value: '631020',
    label: 'Pescador artesanal de peixes e camar\u00f5es'
  },
  {
    value: '631105',
    label: 'Pescador artesanal de \u00e1gua doce'
  },
  {
    value: '631205',
    label: 'Pescador industrial'
  },
  {
    value: '631210',
    label: 'Pescador profissional'
  },
  {
    value: '631335',
    label: 'Criador de r\u00e3s'
  },
  {
    value: '631330',
    label: 'Criador de quel\u00f4nios'
  },
  {
    value: '631325',
    label: 'Criador de peixes'
  },
  {
    value: '631320',
    label: 'Criador de ostras'
  },
  {
    value: '631315',
    label: 'Criador de mexilh\u00f5es'
  },
  {
    value: '631310',
    label: 'Criador de jacar\u00e9s'
  },
  {
    value: '631305',
    label: 'Criador de camar\u00f5es'
  },
  {
    value: '631405',
    label: 'Gelador industrial'
  },
  {
    value: '631420',
    label: 'Redeiro (pesca)'
  },
  {
    value: '631415',
    label: 'Proeiro'
  },
  {
    value: '631410',
    label: 'Gelador profissional'
  },
  {
    value: '632010',
    label: 'Raizeiro'
  },
  {
    value: '632015',
    label: 'Viveirista florestal'
  },
  {
    value: '632005',
    label: 'Guia florestal'
  },
  {
    value: '632115',
    label: 'Identificador florestal'
  },
  {
    value: '632110',
    label: 'Cubador de madeira'
  },
  {
    value: '632105',
    label: 'Classificador de toras'
  },
  {
    value: '632120',
    label: 'Operador de motosserra'
  },
  {
    value: '632125',
    label: 'Trabalhador de extra\u00e7\u00e3o florestal, em geral'
  },
  {
    value: '632215',
    label: 'Trabalhador da explora\u00e7\u00e3o de resinas'
  },
  {
    value: '632210',
    label: 'Trabalhador da explora\u00e7\u00e3o de esp\u00e9cies produtoras de gomas n\u00e3o el\u00e1sticas'
  },
  {
    value: '632205',
    label: 'Seringueiro'
  },
  {
    value: '632370',
    label: 'Trabalhador da explora\u00e7\u00e3o de tucum'
  },
  {
    value: '632365',
    label: 'Trabalhador da explora\u00e7\u00e3o de pia\u00e7ava'
  },
  {
    value: '632360',
    label: 'Trabalhador da explora\u00e7\u00e3o de pequi'
  },
  {
    value: '632355',
    label: 'Trabalhador da explora\u00e7\u00e3o de ouricuri'
  },
  {
    value: '632350',
    label: 'Trabalhador da explora\u00e7\u00e3o de oiticica'
  },
  {
    value: '632345',
    label: 'Trabalhador da explora\u00e7\u00e3o de murumuru'
  },
  {
    value: '632340',
    label: 'Trabalhador da explora\u00e7\u00e3o de malva (p\u00e3ina)'
  },
  {
    value: '632335',
    label: 'Trabalhador da explora\u00e7\u00e3o de copa\u00edba'
  },
  {
    value: '632330',
    label: 'Trabalhador da explora\u00e7\u00e3o de coco-da-praia'
  },
  {
    value: '632325',
    label: 'Trabalhador da explora\u00e7\u00e3o de carna\u00faba'
  },
  {
    value: '632320',
    label: 'Trabalhador da explora\u00e7\u00e3o de buriti'
  },
  {
    value: '632315',
    label: 'Trabalhador da explora\u00e7\u00e3o de bacaba'
  },
  {
    value: '632305',
    label: 'Trabalhador da explora\u00e7\u00e3o de andiroba'
  },
  {
    value: '632310',
    label: 'Trabalhador da explora\u00e7\u00e3o de baba\u00e7u'
  },
  {
    value: '632405',
    label: 'Trabalhador da explora\u00e7\u00e3o de a\u00e7a\u00ed'
  },
  {
    value: '632410',
    label: 'Trabalhador da explora\u00e7\u00e3o de castanha'
  },
  {
    value: '632415',
    label: 'Trabalhador da explora\u00e7\u00e3o de pinh\u00e3o'
  },
  {
    value: '632420',
    label: 'Trabalhador da explora\u00e7\u00e3o de pupunha'
  },
  {
    value: '632505',
    label:
      'Trabalhador da explora\u00e7\u00e3o de \u00e1rvores e arbustos produtores de subst\u00e2ncias arom\u00e1t., Medic. E t\u00f3xicas'
  },
  {
    value: '632510',
    label:
      'Trabalhador da explora\u00e7\u00e3o de cip\u00f3s produtores de subst\u00e2ncias arom\u00e1ticas, medicinais e t\u00f3xicas'
  },
  {
    value: '632525',
    label: 'Trabalhador da extra\u00e7\u00e3o de subst\u00e2ncias arom\u00e1ticas, medicinais e t\u00f3xicas, em geral'
  },
  {
    value: '632520',
    label:
      'Trabalhador da explora\u00e7\u00e3o de ra\u00edzes produtoras de subst\u00e2ncias arom\u00e1ticas, medicinais e t\u00f3xicas'
  },
  {
    value: '632515',
    label: 'Trabalhador da explora\u00e7\u00e3o de madeiras tanantes'
  },
  {
    value: '632605',
    label: 'Carvoeiro'
  },
  {
    value: '632610',
    label: 'Carbonizador'
  },
  {
    value: '632615',
    label: 'Ajudante de carvoaria'
  },
  {
    value: '641010',
    label: 'Operador de m\u00e1quinas de beneficiamento de produtos agr\u00edcolas'
  },
  {
    value: '641005',
    label: 'Operador de colheitadeira'
  },
  {
    value: '641015',
    label: 'Tratorista agr\u00edcola'
  },
  {
    value: '642010',
    label: 'Operador de m\u00e1quinas florestais est\u00e1ticas'
  },
  {
    value: '642005',
    label: 'Operador de colhedor florestal'
  },
  {
    value: '642015',
    label: 'Operador de trator florestal'
  },
  {
    value: '643005',
    label:
      'Trabalhador na opera\u00e7\u00e3o de sistema de irriga\u00e7\u00e3o localizada (microaspers\u00e3o e gotejamento)'
  },
  {
    value: '643010',
    label: 'Trabalhador na opera\u00e7\u00e3o de sistema de irriga\u00e7\u00e3o por aspers\u00e3o (piv\u00f4 central)'
  },
  {
    value: '643015',
    label: 'Trabalhador na opera\u00e7\u00e3o de sistemas convencionais de irriga\u00e7\u00e3o por aspers\u00e3o'
  },
  {
    value: '643020',
    label: 'Trabalhador na opera\u00e7\u00e3o de sistemas de irriga\u00e7\u00e3o e aspers\u00e3o (alto propelido)'
  },
  {
    value: '643025',
    label: 'Trabalhador na opera\u00e7\u00e3o de sistemas de irriga\u00e7\u00e3o por superf\u00edcie e drenagem'
  },
  {
    value: '710125',
    label: 'Supervisor de transporte na minera\u00e7\u00e3o'
  },
  {
    value: '710105',
    label: 'Supervisor de apoio operacional na minera\u00e7\u00e3o'
  },
  {
    value: '710110',
    label: 'Supervisor de extra\u00e7\u00e3o de sal'
  },
  {
    value: '710115',
    label: 'Supervisor de perfura\u00e7\u00e3o e desmonte'
  },
  {
    value: '710120',
    label: 'Supervisor de produ\u00e7\u00e3o na minera\u00e7\u00e3o'
  },
  {
    value: '710205',
    label: 'Mestre (constru\u00e7\u00e3o civil)'
  },
  {
    value: '710210',
    label: 'Mestre de linhas (ferrovias)'
  },
  {
    value: '710225',
    label: 'Fiscal de p\u00e1tio de usina de concreto'
  },
  {
    value: '710220',
    label: 'Supervisor de usina de concreto'
  },
  {
    value: '710215',
    label: 'Inspetor de terraplenagem'
  },
  {
    value: '711125',
    label: 'Escorador de minas'
  },
  {
    value: '711120',
    label: 'Detonador'
  },
  {
    value: '711115',
    label: 'Destro\u00e7ador de pedra'
  },
  {
    value: '711110',
    label: 'Canteiro'
  },
  {
    value: '711105',
    label: 'Amostrador de min\u00e9rios'
  },
  {
    value: '711130',
    label: 'Mineiro'
  },
  {
    value: '711225',
    label: 'Operador de m\u00e1quina perfuradora (minas e pedreiras)'
  },
  {
    value: '711220',
    label: 'Operador de m\u00e1quina de extra\u00e7\u00e3o cont\u00ednua (minas de carv\u00e3o)'
  },
  {
    value: '711215',
    label: 'Operador de m\u00e1quina cortadora (minas e pedreiras)'
  },
  {
    value: '711210',
    label: 'Operador de carregadeira'
  },
  {
    value: '711205',
    label: 'Operador de caminh\u00e3o (minas e pedreiras)'
  },
  {
    value: '711230',
    label: 'Operador de m\u00e1quina perfuratriz'
  },
  {
    value: '711245',
    label: 'Operador de trator (minas e pedreiras)'
  },
  {
    value: '711240',
    label: 'Operador de schutthecar'
  },
  {
    value: '711235',
    label: 'Operador de motoniveladora (extra\u00e7\u00e3o de minerais s\u00f3lidos)'
  },
  {
    value: '711305',
    label: 'Operador de sonda de percuss\u00e3o'
  },
  {
    value: '711310',
    label: 'Operador de sonda rotativa'
  },
  {
    value: '711315',
    label: 'Sondador (po\u00e7os de petr\u00f3leo e g\u00e1s)'
  },
  {
    value: '711320',
    label: 'Sondador de po\u00e7os (exceto de petr\u00f3leo e g\u00e1s)'
  },
  {
    value: '711330',
    label: 'Torrista (petr\u00f3leo)'
  },
  {
    value: '711325',
    label: 'Plataformista (petr\u00f3leo)'
  },
  {
    value: '711405',
    label: 'Garimpeiro'
  },
  {
    value: '711410',
    label: 'Operador de salina (sal marinho)'
  },
  {
    value: '712105',
    label: 'Moleiro de min\u00e9rios'
  },
  {
    value: '712110',
    label: 'Operador de aparelho de flota\u00e7\u00e3o'
  },
  {
    value: '712115',
    label: 'Operador de aparelho de precipita\u00e7\u00e3o (minas de ouro ou prata)'
  },
  {
    value: '712120',
    label: 'Operador de britador de mand\u00edbulas'
  },
  {
    value: '712125',
    label: 'Operador de espessador'
  },
  {
    value: '712130',
    label: 'Operador de jig (minas)'
  },
  {
    value: '712135',
    label: 'Operador de peneiras hidr\u00e1ulicas'
  },
  {
    value: '712205',
    label: 'Cortador de pedras'
  },
  {
    value: '712210',
    label: 'Gravador de inscri\u00e7\u00f5es em pedra'
  },
  {
    value: '712215',
    label: 'Gravador de relevos em pedra'
  },
  {
    value: '712220',
    label: 'Polidor de pedras'
  },
  {
    value: '712225',
    label: 'Torneiro (lavra de pedra)'
  },
  {
    value: '712230',
    label: 'Tra\u00e7ador de pedras'
  },
  {
    value: '715115',
    label: 'Operador de escavadeira'
  },
  {
    value: '715110',
    label: 'Operador de compactadora de solos'
  },
  {
    value: '715105',
    label: 'Operador de bate-estacas'
  },
  {
    value: '715145',
    label: 'Operador de trator de l\u00e2mina'
  },
  {
    value: '715120',
    label: 'Operador de m\u00e1quina de abrir valas'
  },
  {
    value: '715135',
    label: 'Operador de p\u00e1 carregadeira'
  },
  {
    value: '715130',
    label: 'Operador de motoniveladora'
  },
  {
    value: '715125',
    label: 'Operador de m\u00e1quinas de constru\u00e7\u00e3o civil e minera\u00e7\u00e3o'
  },
  {
    value: '715140',
    label: 'Operador de pavimentadora (asfalto, concreto e materiais similares)'
  },
  {
    value: '715230',
    label: 'Pedreiro de edifica\u00e7\u00f5es'
  },
  {
    value: '715225',
    label: 'Pedreiro (minera\u00e7\u00e3o)'
  },
  {
    value: '715220',
    label: 'Pedreiro (material refrat\u00e1rio)'
  },
  {
    value: '715215',
    label: 'Pedreiro (chamin\u00e9s industriais)'
  },
  {
    value: '715205',
    label: 'Calceteiro'
  },
  {
    value: '715210',
    label: 'Pedreiro'
  },
  {
    value: '715310',
    label: 'Moldador de corpos de prova em usinas de concreto'
  },
  {
    value: '715305',
    label: 'Armador de estrutura de concreto'
  },
  {
    value: '715315',
    label: 'Armador de estrutura de concreto armado'
  },
  {
    value: '715405',
    label: 'Operador de betoneira'
  },
  {
    value: '715410',
    label: 'Operador de bomba de concreto'
  },
  {
    value: '715415',
    label: 'Operador de central de concreto'
  },
  {
    value: '715505',
    label: 'Carpinteiro'
  },
  {
    value: '715510',
    label: 'Carpinteiro (esquadrias)'
  },
  {
    value: '715545',
    label: 'Montador de andaimes (edifica\u00e7\u00f5es)'
  },
  {
    value: '715540',
    label: 'Carpinteiro de obras civis de arte (pontes, t\u00faneis, barragens)'
  },
  {
    value: '715535',
    label: 'Carpinteiro de f\u00f4rmas para concreto'
  },
  {
    value: '715530',
    label: 'Carpinteiro (telhados)'
  },
  {
    value: '715525',
    label: 'Carpinteiro de obras'
  },
  {
    value: '715520',
    label: 'Carpinteiro (minera\u00e7\u00e3o)'
  },
  {
    value: '715515',
    label: 'Carpinteiro (cen\u00e1rios)'
  },
  {
    value: '715610',
    label: 'Eletricista de instala\u00e7\u00f5es (edif\u00edcios)'
  },
  {
    value: '715615',
    label: 'Eletricista de instala\u00e7\u00f5es'
  },
  {
    value: '715605',
    label: 'Eletricista de instala\u00e7\u00f5es (cen\u00e1rios)'
  },
  {
    value: '715730',
    label: 'Instalador de material isolante, a m\u00e1quina (edifica\u00e7\u00f5es)'
  },
  {
    value: '715705',
    label: 'Aplicador de asfalto impermeabilizante (coberturas)'
  },
  {
    value: '715715',
    label: 'Instalador de isolantes t\u00e9rmicos (refrigera\u00e7\u00e3o e climatiza\u00e7\u00e3o)'
  },
  {
    value: '715720',
    label: 'Instalador de isolantes t\u00e9rmicos de caldeira e tubula\u00e7\u00f5es'
  },
  {
    value: '715725',
    label: 'Instalador de material isolante, a m\u00e3o (edifica\u00e7\u00f5es)'
  },
  {
    value: '715710',
    label: 'Instalador de isolantes ac\u00fasticos'
  },
  {
    value: '716105',
    label: 'Acabador de superf\u00edcies de concreto'
  },
  {
    value: '716110',
    label: 'Revestidor de superf\u00edcies de concreto'
  },
  {
    value: '716205',
    label: 'Telhador (telhas de argila e materiais similares)'
  },
  {
    value: '716210',
    label: 'Telhador (telhas de cimento-amianto)'
  },
  {
    value: '716215',
    label: 'Telhador (telhas met\u00e1licas)'
  },
  {
    value: '716220',
    label: 'Telhador (telhas pl\u00e1sticas)'
  },
  {
    value: '716305',
    label: 'Vidraceiro'
  },
  {
    value: '716310',
    label: 'Vidraceiro (edifica\u00e7\u00f5es)'
  },
  {
    value: '716315',
    label: 'Vidraceiro (vitrais)'
  },
  {
    value: '716405',
    label: 'Gesseiro'
  },
  {
    value: '716520',
    label: 'Lustrador de piso'
  },
  {
    value: '716515',
    label: 'Pastilheiro'
  },
  {
    value: '716510',
    label: 'Ladrilheiro'
  },
  {
    value: '716505',
    label: 'Assoalhador'
  },
  {
    value: '716535',
    label: 'Taqueiro'
  },
  {
    value: '716525',
    label: 'Marmorista (constru\u00e7\u00e3o)'
  },
  {
    value: '716530',
    label: 'Mosa\u00edsta'
  },
  {
    value: '716605',
    label: 'Calafetador'
  },
  {
    value: '716610',
    label: 'Pintor de obras'
  },
  {
    value: '716615',
    label: 'Revestidor de interiores (papel, material pl\u00e1stico e emborrachados)'
  },
  {
    value: '717005',
    label: 'Demolidor de edifica\u00e7\u00f5es'
  },
  {
    value: '717010',
    label: 'Operador de martelete'
  },
  {
    value: '717025',
    label: 'Vibradorista'
  },
  {
    value: '717020',
    label: 'Servente de obras'
  },
  {
    value: '717015',
    label: 'Poceiro (edifica\u00e7\u00f5es)'
  },
  {
    value: '720110',
    label: 'Mestre de caldeiraria'
  },
  {
    value: '720105',
    label: 'Mestre (afiador de ferramentas)'
  },
  {
    value: '720160',
    label: 'Supervisor de controle de tratamento t\u00e9rmico'
  },
  {
    value: '720155',
    label: 'Mestre serralheiro'
  },
  {
    value: '720150',
    label: 'Mestre de usinagem'
  },
  {
    value: '720115',
    label: 'Mestre de ferramentaria'
  },
  {
    value: '720120',
    label: 'Mestre de forjaria'
  },
  {
    value: '720125',
    label: 'Mestre de fundi\u00e7\u00e3o'
  },
  {
    value: '720130',
    label: 'Mestre de galvanoplastia'
  },
  {
    value: '720135',
    label: 'Mestre de pintura (tratamento de superf\u00edcies)'
  },
  {
    value: '720140',
    label: 'Mestre de soldagem'
  },
  {
    value: '720145',
    label: 'Mestre de trefila\u00e7\u00e3o de metais'
  },
  {
    value: '720210',
    label: 'Mestre (ind\u00fastria de automotores e material de transportes)'
  },
  {
    value: '720205',
    label: 'Mestre (constru\u00e7\u00e3o naval)'
  },
  {
    value: '720215',
    label: 'Mestre (ind\u00fastria de m\u00e1quinas e outros equipamentos mec\u00e2nicos)'
  },
  {
    value: '720220',
    label: 'Mestre de constru\u00e7\u00e3o de fornos'
  },
  {
    value: '721110',
    label: 'Ferramenteiro de mandris, calibradores e outros dispositivos'
  },
  {
    value: '721105',
    label: 'Ferramenteiro'
  },
  {
    value: '721115',
    label: 'Modelador de metais (fundi\u00e7\u00e3o)'
  },
  {
    value: '721220',
    label: 'Operador de usinagem convencional por abras\u00e3o'
  },
  {
    value: '721215',
    label: 'Operador de m\u00e1quinas-ferramenta convencionais'
  },
  {
    value: '721210',
    label: 'Operador de m\u00e1quinas operatrizes'
  },
  {
    value: '721205',
    label: 'Operador de m\u00e1quina de eletroeros\u00e3o'
  },
  {
    value: '721225',
    label: 'Preparador de m\u00e1quinas-ferramenta'
  },
  {
    value: '721320',
    label: 'Afiador de serras'
  },
  {
    value: '721315',
    label: 'Afiador de ferramentas'
  },
  {
    value: '721310',
    label: 'Afiador de cutelaria'
  },
  {
    value: '721305',
    label: 'Afiador de cardas'
  },
  {
    value: '721325',
    label: 'Polidor de metais'
  },
  {
    value: '721405',
    label: 'Operador de centro de usinagem com comando num\u00e9rico'
  },
  {
    value: '721410',
    label: 'Operador de fresadora com comando num\u00e9rico'
  },
  {
    value: '721415',
    label: 'Operador de mandriladora com comando num\u00e9rico'
  },
  {
    value: '721420',
    label: 'Operador de m\u00e1quina eletroeros\u00e3o, \u00e0 fio, com comando num\u00e9rico'
  },
  {
    value: '721425',
    label: 'Operador de retificadora com comando num\u00e9rico'
  },
  {
    value: '721430',
    label: 'Operador de torno com comando num\u00e9rico'
  },
  {
    value: '722105',
    label: 'Forjador'
  },
  {
    value: '722110',
    label: 'Forjador a martelo'
  },
  {
    value: '722115',
    label: 'Forjador prensista'
  },
  {
    value: '722215',
    label: 'Operador de acabamento de pe\u00e7as fundidas'
  },
  {
    value: '722220',
    label: 'Operador de m\u00e1quina centrifugadora de fundi\u00e7\u00e3o'
  },
  {
    value: '722225',
    label: 'Operador de m\u00e1quina de fundir sob press\u00e3o'
  },
  {
    value: '722230',
    label: 'Operador de vazamento (lingotamento)'
  },
  {
    value: '722235',
    label: 'Preparador de panelas (lingotamento)'
  },
  {
    value: '722205',
    label: 'Fundidor de metais'
  },
  {
    value: '722210',
    label: 'Lingotador'
  },
  {
    value: '722305',
    label: 'Macheiro, a m\u00e3o'
  },
  {
    value: '722310',
    label: 'Macheiro, a  m\u00e1quina'
  },
  {
    value: '722315',
    label: 'Moldador, a  m\u00e3o'
  },
  {
    value: '722320',
    label: 'Moldador, a  m\u00e1quina'
  },
  {
    value: '722325',
    label: 'Operador de equipamentos de prepara\u00e7\u00e3o de areia'
  },
  {
    value: '722330',
    label: 'Operador de m\u00e1quina de moldar automatizada'
  },
  {
    value: '722405',
    label: 'Cableador'
  },
  {
    value: '722410',
    label: 'Estirador de tubos de metal sem costura'
  },
  {
    value: '722415',
    label: 'Trefilador de metais, \u00e0 m\u00e1quina'
  },
  {
    value: '723120',
    label: 'Operador de forno de tratamento t\u00e9rmico de metais'
  },
  {
    value: '723115',
    label: 'Operador de equipamento para resfriamento'
  },
  {
    value: '723110',
    label: 'Normalizador de metais e de comp\u00f3sitos'
  },
  {
    value: '723105',
    label: 'Cementador de metais'
  },
  {
    value: '723125',
    label: 'Temperador de metais e de comp\u00f3sitos'
  },
  {
    value: '723220',
    label: 'Metalizador a pistola'
  },
  {
    value: '723215',
    label: 'Galvanizador'
  },
  {
    value: '723210',
    label: 'Fosfatizador'
  },
  {
    value: '723205',
    label: 'Decapador'
  },
  {
    value: '723225',
    label: 'Metalizador (banho quente)'
  },
  {
    value: '723240',
    label: 'Oxidador'
  },
  {
    value: '723235',
    label: 'Operador de zincagem (processo eletrol\u00edtico)'
  },
  {
    value: '723230',
    label: 'Operador de m\u00e1quina recobridora de arame'
  },
  {
    value: '723305',
    label: 'Operador de equipamento de secagem de pintura'
  },
  {
    value: '723310',
    label: 'Pintor a pincel e rolo (exceto obras e estruturas met\u00e1licas)'
  },
  {
    value: '723325',
    label: 'Pintor por imers\u00e3o'
  },
  {
    value: '723320',
    label: 'Pintor de ve\u00edculos (fabrica\u00e7\u00e3o)'
  },
  {
    value: '723315',
    label: 'Pintor de estruturas met\u00e1licas'
  },
  {
    value: '723330',
    label: 'Pintor, a  pistola (exceto obras e estruturas met\u00e1licas)'
  },
  {
    value: '724135',
    label: 'Instalador de tubula\u00e7\u00f5es de vapor (produ\u00e7\u00e3o e distribui\u00e7\u00e3o)'
  },
  {
    value: '724105',
    label: 'Assentador de canaliza\u00e7\u00e3o (edifica\u00e7\u00f5es)'
  },
  {
    value: '724110',
    label: 'Encanador'
  },
  {
    value: '724115',
    label: 'Instalador de tubula\u00e7\u00f5es'
  },
  {
    value: '724120',
    label: 'Instalador de tubula\u00e7\u00f5es (aeronaves)'
  },
  {
    value: '724130',
    label:
      'Instalador de tubula\u00e7\u00f5es de g\u00e1s combust\u00edvel (produ\u00e7\u00e3o e distribui\u00e7\u00e3o)'
  },
  {
    value: '724125',
    label: 'Instalador de tubula\u00e7\u00f5es (embarca\u00e7\u00f5es)'
  },
  {
    value: '724230',
    label: 'Rebitador, a  m\u00e3o'
  },
  {
    value: '724225',
    label: 'Riscador de estruturas met\u00e1licas'
  },
  {
    value: '724220',
    label: 'Preparador de estruturas met\u00e1licas'
  },
  {
    value: '724215',
    label: 'Rebitador a  martelo pneum\u00e1tico'
  },
  {
    value: '724205',
    label: 'Montador de estruturas met\u00e1licas'
  },
  {
    value: '724210',
    label: 'Montador de estruturas met\u00e1licas de embarca\u00e7\u00f5es'
  },
  {
    value: '724305',
    label: 'Brasador'
  },
  {
    value: '724325',
    label: 'Soldador el\u00e9trico'
  },
  {
    value: '724320',
    label: 'Soldador a  oxig\u00e1s'
  },
  {
    value: '724315',
    label: 'Soldador'
  },
  {
    value: '724310',
    label: 'Oxicortador a m\u00e3o e a  m\u00e1quina'
  },
  {
    value: '724440',
    label: 'Serralheiro'
  },
  {
    value: '724405',
    label: 'Caldeireiro (chapas de cobre)'
  },
  {
    value: '724435',
    label: 'Funileiro industrial'
  },
  {
    value: '724430',
    label: 'Chapeador de aeronaves'
  },
  {
    value: '724425',
    label: 'Chapeador naval'
  },
  {
    value: '724410',
    label: 'Caldeireiro (chapas de ferro e a\u00e7o)'
  },
  {
    value: '724415',
    label: 'Chapeador'
  },
  {
    value: '724420',
    label: 'Chapeador de carrocerias met\u00e1licas (fabrica\u00e7\u00e3o)'
  },
  {
    value: '724515',
    label: 'Prensista (operador de prensa)'
  },
  {
    value: '724510',
    label: 'Operador de m\u00e1quina de dobrar chapas'
  },
  {
    value: '724505',
    label: 'Operador de m\u00e1quina de cilindrar chapas'
  },
  {
    value: '724605',
    label: 'Operador de la\u00e7os de cabos de a\u00e7o'
  },
  {
    value: '724610',
    label: 'Tran\u00e7ador de cabos de a\u00e7o'
  },
  {
    value: '725005',
    label: 'Ajustador ferramenteiro'
  },
  {
    value: '725010',
    label: 'Ajustador mec\u00e2nico'
  },
  {
    value: '725015',
    label: 'Ajustador mec\u00e2nico (usinagem em bancada e em m\u00e1quinas-ferramentas)'
  },
  {
    value: '725020',
    label: 'Ajustador mec\u00e2nico em bancada'
  },
  {
    value: '725025',
    label: 'Ajustador naval (reparo e constru\u00e7\u00e3o)'
  },
  {
    value: '725105',
    label: 'Montador de m\u00e1quinas, motores e acess\u00f3rios (montagem em s\u00e9rie)'
  },
  {
    value: '725205',
    label: 'Montador de m\u00e1quinas'
  },
  {
    value: '725210',
    label: 'Montador de m\u00e1quinas gr\u00e1ficas'
  },
  {
    value: '725225',
    label: 'Montador de m\u00e1quinas-ferramentas (usinagem de metais)'
  },
  {
    value: '725220',
    label: 'Montador de m\u00e1quinas t\u00eaxteis'
  },
  {
    value: '725215',
    label: 'Montador de m\u00e1quinas operatrizes para madeira'
  },
  {
    value: '725315',
    label: 'Montador de m\u00e1quinas de minas e pedreiras'
  },
  {
    value: '725310',
    label: 'Montador de m\u00e1quinas agr\u00edcolas'
  },
  {
    value: '725320',
    label: 'Montador de m\u00e1quinas de terraplenagem'
  },
  {
    value: '725305',
    label: 'Montador de equipamento de levantamento'
  },
  {
    value: '725410',
    label: 'Mec\u00e2nico montador de motores de embarca\u00e7\u00f5es'
  },
  {
    value: '725405',
    label: 'Mec\u00e2nico montador de motores de aeronaves'
  },
  {
    value: '725415',
    label: 'Mec\u00e2nico montador de motores de explos\u00e3o e diesel'
  },
  {
    value: '725420',
    label: 'Mec\u00e2nico montador de turboalimentadores'
  },
  {
    value: '725505',
    label: 'Montador de ve\u00edculos (linha de montagem)'
  },
  {
    value: '725510',
    label: 'Operador de time de montagem'
  },
  {
    value: '725605',
    label: 'Montador de estruturas de aeronaves'
  },
  {
    value: '725610',
    label: 'Montador de sistemas de combust\u00edvel de aeronaves'
  },
  {
    value: '725705',
    label: 'Mec\u00e2nico de refrigera\u00e7\u00e3o'
  },
  {
    value: '730105',
    label: 'Supervisor de montagem e instala\u00e7\u00e3o eletroeletr\u00f4nica'
  },
  {
    value: '731115',
    label: 'Montador de equipamentos el\u00e9tricos (instrumentos de medi\u00e7\u00e3o)'
  },
  {
    value: '731120',
    label: 'Montador de equipamentos el\u00e9tricos (aparelhos eletrodom\u00e9sticos)'
  },
  {
    value: '731125',
    label: 'Montador de equipamentos el\u00e9tricos (centrais el\u00e9tricas)'
  },
  {
    value: '731130',
    label: 'Montador de equipamentos el\u00e9tricos (motores e d\u00ednamos)'
  },
  {
    value: '731135',
    label: 'Montador de equipamentos el\u00e9tricos'
  },
  {
    value: '731140',
    label: 'Montador de equipamentos eletr\u00f4nicos (instala\u00e7\u00f5es de sinaliza\u00e7\u00e3o)'
  },
  {
    value: '731145',
    label: 'Montador de equipamentos eletr\u00f4nicos (m\u00e1quinas industriais)'
  },
  {
    value: '731150',
    label: 'Montador de equipamentos eletr\u00f4nicos'
  },
  {
    value: '731155',
    label: 'Montador de equipamentos el\u00e9tricos (elevadores e equipamentos similares)'
  },
  {
    value: '731160',
    label: 'Montador de equipamentos el\u00e9tricos (transformadores)'
  },
  {
    value: '731165',
    label: 'Bobinador eletricista, \u00e0 m\u00e3o'
  },
  {
    value: '731170',
    label: 'Bobinador eletricista, \u00e0 m\u00e1quina'
  },
  {
    value: '731175',
    label: 'Operador de linha de montagem (aparelhos el\u00e9tricos)'
  },
  {
    value: '731180',
    label: 'Operador de linha de montagem (aparelhos eletr\u00f4nicos)'
  },
  {
    value: '731105',
    label: 'Montador de equipamentos eletr\u00f4nicos (aparelhos m\u00e9dicos)'
  },
  {
    value: '731110',
    label: 'Montador de equipamentos eletr\u00f4nicos (computadores e equipamentos auxiliares)'
  },
  {
    value: '731205',
    label: 'Montador de equipamentos eletr\u00f4nicos (esta\u00e7\u00e3o de r\u00e1dio, tv e equipamentos de radar)'
  },
  {
    value: '731310',
    label: 'Instalador-reparador de equipamentos de energia em telefonia'
  },
  {
    value: '731315',
    label: 'Instalador-reparador de equipamentos de transmiss\u00e3o em telefonia'
  },
  {
    value: '731320',
    label: 'Instalador-reparador de linhas e aparelhos de telecomunica\u00e7\u00f5es'
  },
  {
    value: '731325',
    label: 'Instalador-reparador de redes e cabos telef\u00f4nicos'
  },
  {
    value: '731305',
    label: 'Instalador-reparador de equipamentos de comuta\u00e7\u00e3o em telefonia'
  },
  {
    value: '731330',
    label: 'Reparador de aparelhos de telecomunica\u00e7\u00f5es em laborat\u00f3rio'
  },
  {
    value: '732105',
    label:
      'Eletricista de manuten\u00e7\u00e3o de linhas el\u00e9tricas, telef\u00f4nicas e de comunica\u00e7\u00e3o de dados'
  },
  {
    value: '732110',
    label: 'Emendador de cabos el\u00e9tricos e telef\u00f4nicos (a\u00e9reos e subterr\u00e2neos)'
  },
  {
    value: '732115',
    label: 'Examinador de cabos, linhas el\u00e9tricas e telef\u00f4nicas'
  },
  {
    value: '732120',
    label: 'Instalador de linhas el\u00e9tricas de alta e baixa - tens\u00e3o (rede a\u00e9rea e subterr\u00e2nea)'
  },
  {
    value: '732125',
    label: 'Instalador eletricista (tra\u00e7\u00e3o de ve\u00edculos)'
  },
  {
    value: '732130',
    label: 'Instalador-reparador de redes telef\u00f4nicas e de comunica\u00e7\u00e3o de dados'
  },
  {
    value: '732135',
    label: 'Ligador de linhas telef\u00f4nicas'
  },
  {
    value: '740110',
    label: 'Supervisor de fabrica\u00e7\u00e3o de instrumentos musicais'
  },
  {
    value: '740105',
    label: 'Supervisor da mec\u00e2nica de precis\u00e3o'
  },
  {
    value: '741125',
    label: 'Relojoeiro (repara\u00e7\u00e3o)'
  },
  {
    value: '741120',
    label: 'Relojoeiro (fabrica\u00e7\u00e3o)'
  },
  {
    value: '741115',
    label: 'Montador de instrumentos de precis\u00e3o'
  },
  {
    value: '741110',
    label: 'Montador de instrumentos de \u00f3ptica'
  },
  {
    value: '741105',
    label: 'Ajustador de instrumentos de precis\u00e3o'
  },
  {
    value: '742135',
    label: 'Confeccionador de \u00f3rg\u00e3o'
  },
  {
    value: '742130',
    label: 'Confeccionador de instrumentos de sopro (metal)'
  },
  {
    value: '742125',
    label: 'Confeccionador de instrumentos de sopro (madeira)'
  },
  {
    value: '742120',
    label: 'Confeccionador de instrumentos de percuss\u00e3o (pele, couro ou pl\u00e1stico)'
  },
  {
    value: '742115',
    label: 'Confeccionador de instrumentos de corda'
  },
  {
    value: '742110',
    label: 'Confeccionador de acorde\u00e3o'
  },
  {
    value: '742140',
    label: 'Confeccionador de piano'
  },
  {
    value: '742105',
    label: 'Afinador de instrumentos musicais'
  },
  {
    value: '750105',
    label: 'Supervisor de joalheria'
  },
  {
    value: '750205',
    label:
      'Supervisor da ind\u00fastria de minerais n\u00e3o met\u00e1licos (exceto os derivados de petr\u00f3leo e carv\u00e3o)'
  },
  {
    value: '751005',
    label: 'Engastador (j\u00f3ias)'
  },
  {
    value: '751010',
    label: 'Joalheiro'
  },
  {
    value: '751015',
    label: 'Joalheiro (repara\u00e7\u00f5es)'
  },
  {
    value: '751020',
    label: 'Lapidador (j\u00f3ias)'
  },
  {
    value: '751105',
    label: 'Bate-folha a  m\u00e1quina'
  },
  {
    value: '751110',
    label: 'Fundidor (joalheria e ourivesaria)'
  },
  {
    value: '751130',
    label: 'Trefilador (joalheria e ourivesaria)'
  },
  {
    value: '751125',
    label: 'Ourives'
  },
  {
    value: '751120',
    label: 'Laminador de metais preciosos a  m\u00e3o'
  },
  {
    value: '751115',
    label: 'Gravador (joalheria e ourivesaria)'
  },
  {
    value: '752110',
    label: 'Moldador (vidros)'
  },
  {
    value: '752105',
    label: 'Artes\u00e3o modelador (vidros)'
  },
  {
    value: '752115',
    label: 'Soprador de vidro'
  },
  {
    value: '752120',
    label: 'Transformador de tubos de vidro'
  },
  {
    value: '752230',
    label: 'Lapidador de vidros e cristais'
  },
  {
    value: '752235',
    label: 'Surfassagista'
  },
  {
    value: '752205',
    label: 'Aplicador serigr\u00e1fico em vidros'
  },
  {
    value: '752210',
    label: 'Cortador de vidro'
  },
  {
    value: '752215',
    label: 'Gravador de vidro a  \u00e1gua-forte'
  },
  {
    value: '752220',
    label: 'Gravador de vidro a  esmeril'
  },
  {
    value: '752225',
    label: 'Gravador de vidro a  jato de areia'
  },
  {
    value: '752305',
    label: 'Ceramista'
  },
  {
    value: '752310',
    label: 'Ceramista (torno de pedal e motor)'
  },
  {
    value: '752315',
    label: 'Ceramista (torno semi-autom\u00e1tico)'
  },
  {
    value: '752320',
    label: 'Ceramista modelador'
  },
  {
    value: '752325',
    label: 'Ceramista moldador'
  },
  {
    value: '752330',
    label: 'Ceramista prensador'
  },
  {
    value: '752405',
    label: 'Decorador de cer\u00e2mica'
  },
  {
    value: '752410',
    label: 'Decorador de vidro'
  },
  {
    value: '752415',
    label: 'Decorador de vidro \u00e0 pincel'
  },
  {
    value: '752420',
    label: 'Operador de esmaltadeira'
  },
  {
    value: '752425',
    label: 'Operador de espelhamento'
  },
  {
    value: '752430',
    label: 'Pintor de cer\u00e2mica, a  pincel'
  },
  {
    value: '760110',
    label: 'Contramestre de fia\u00e7\u00e3o (ind\u00fastria t\u00eaxtil)'
  },
  {
    value: '760120',
    label: 'Contramestre de tecelagem (ind\u00fastria t\u00eaxtil)'
  },
  {
    value: '760105',
    label: 'Contramestre de acabamento (ind\u00fastria t\u00eaxtil)'
  },
  {
    value: '760125',
    label: 'Mestre (ind\u00fastria t\u00eaxtil e de confec\u00e7\u00f5es)'
  },
  {
    value: '760115',
    label: 'Contramestre de malharia (ind\u00fastria t\u00eaxtil)'
  },
  {
    value: '760205',
    label: 'Supervisor de curtimento'
  },
  {
    value: '760310',
    label: 'Encarregado de costura na confec\u00e7\u00e3o do vestu\u00e1rio'
  },
  {
    value: '760305',
    label: 'Encarregado de corte na confec\u00e7\u00e3o do vestu\u00e1rio'
  },
  {
    value: '760405',
    label: 'Supervisor  (ind\u00fastria de cal\u00e7ados e artefatos de couro)'
  },
  {
    value: '760505',
    label: 'Supervisor da confec\u00e7\u00e3o de artefatos de tecidos, couros e afins'
  },
  {
    value: '760605',
    label: 'Supervisor das artes gr\u00e1ficas  (ind\u00fastria editorial e gr\u00e1fica)'
  },
  {
    value: '761005',
    label: 'Operador polivalente da ind\u00fastria t\u00eaxtil'
  },
  {
    value: '761110',
    label: 'Lavador de l\u00e3'
  },
  {
    value: '761105',
    label: 'Classificador de fibras t\u00eaxteis'
  },
  {
    value: '761210',
    label: 'Operador de binadeira'
  },
  {
    value: '761260',
    label: 'Operador de retorcedeira'
  },
  {
    value: '761255',
    label: 'Operador de penteadeira'
  },
  {
    value: '761250',
    label: 'Operador de passador (fia\u00e7\u00e3o)'
  },
  {
    value: '761245',
    label: 'Operador de open-end'
  },
  {
    value: '761240',
    label: 'Operador de ma\u00e7aroqueira'
  },
  {
    value: '761235',
    label: 'Operador de laminadeira e reunideira'
  },
  {
    value: '761230',
    label: 'Operador de filat\u00f3rio'
  },
  {
    value: '761225',
    label: 'Operador de conicaleira'
  },
  {
    value: '761220',
    label: 'Operador de cardas'
  },
  {
    value: '761215',
    label: 'Operador de bobinadeira'
  },
  {
    value: '761205',
    label: 'Operador de abertura (fia\u00e7\u00e3o)'
  },
  {
    value: '761312',
    label: 'Tecel\u00e3o (tear jacquard)'
  },
  {
    value: '761321',
    label: 'Tecel\u00e3o (tear mec\u00e2nico liso)'
  },
  {
    value: '761330',
    label: 'Tecel\u00e3o de malhas (m\u00e1quina circular)'
  },
  {
    value: '761333',
    label: 'Tecel\u00e3o de malhas (m\u00e1quina retil\u00ednea)'
  },
  {
    value: '761348',
    label: 'Operador de engomadeira de urdume'
  },
  {
    value: '761351',
    label: 'Operador de espuladeira'
  },
  {
    value: '761357',
    label: 'Operador de urdideira'
  },
  {
    value: '761360',
    label: 'Passamaneiro a  m\u00e1quina'
  },
  {
    value: '761363',
    label: 'Remetedor de fios'
  },
  {
    value: '761303',
    label: 'Tecel\u00e3o (redes)'
  },
  {
    value: '761306',
    label: 'Tecel\u00e3o (rendas e bordados)'
  },
  {
    value: '761315',
    label: 'Tecel\u00e3o (tear mec\u00e2nico de maquineta)'
  },
  {
    value: '761318',
    label: 'Tecel\u00e3o (tear mec\u00e2nico de xadrez)'
  },
  {
    value: '761324',
    label: 'Tecel\u00e3o (tear mec\u00e2nico, exceto jacquard)'
  },
  {
    value: '761327',
    label: 'Tecel\u00e3o de malhas, a  m\u00e1quina'
  },
  {
    value: '761336',
    label: 'Tecel\u00e3o de meias, a  m\u00e1quina'
  },
  {
    value: '761339',
    label: 'Tecel\u00e3o de meias (m\u00e1quina circular)'
  },
  {
    value: '761342',
    label: 'Tecel\u00e3o de meias (m\u00e1quina retil\u00ednea)'
  },
  {
    value: '761345',
    label: 'Tecel\u00e3o de tapetes, a  m\u00e1quina'
  },
  {
    value: '761354',
    label: 'Operador de m\u00e1quina de cordoalha'
  },
  {
    value: '761366',
    label: 'Picotador de cart\u00f5es jacquard'
  },
  {
    value: '761309',
    label: 'Tecel\u00e3o (tear autom\u00e1tico)'
  },
  {
    value: '761405',
    label: 'Alvejador (tecidos)'
  },
  {
    value: '761410',
    label: 'Estampador de tecido'
  },
  {
    value: '761415',
    label: 'Operador de calandras (tecidos)'
  },
  {
    value: '761420',
    label: 'Operador de chamuscadeira de tecidos'
  },
  {
    value: '761425',
    label: 'Operador de impermeabilizador de tecidos'
  },
  {
    value: '761430',
    label: 'Operador de m\u00e1quina de lavar fios e tecidos'
  },
  {
    value: '761435',
    label: 'Operador de rameuse'
  },
  {
    value: '761805',
    label: 'Inspetor de estamparia (produ\u00e7\u00e3o t\u00eaxtil)'
  },
  {
    value: '761810',
    label: 'Revisor de fios (produ\u00e7\u00e3o t\u00eaxtil)'
  },
  {
    value: '761815',
    label: 'Revisor de tecidos acabados'
  },
  {
    value: '761820',
    label: 'Revisor de tecidos crus'
  },
  {
    value: '762005',
    label: 'Trabalhador polivalente do curtimento de couros e peles'
  },
  {
    value: '762110',
    label: 'Descarnador de couros e peles, \u00e0 maquina'
  },
  {
    value: '762105',
    label: 'Classificador de peles'
  },
  {
    value: '762115',
    label: 'Estirador de couros e peles (prepara\u00e7\u00e3o)'
  },
  {
    value: '762120',
    label: 'Fuloneiro'
  },
  {
    value: '762125',
    label: 'Rachador de couros e peles'
  },
  {
    value: '762215',
    label: 'Enxugador de couros'
  },
  {
    value: '762210',
    label: 'Classificador de couros'
  },
  {
    value: '762205',
    label: 'Curtidor (couros e peles)'
  },
  {
    value: '762220',
    label: 'Rebaixador de couros'
  },
  {
    value: '762305',
    label: 'Estirador de couros e peles (acabamento)'
  },
  {
    value: '762310',
    label: 'Fuloneiro no acabamento de couros e peles'
  },
  {
    value: '762315',
    label: 'Lixador de couros e peles'
  },
  {
    value: '762320',
    label: 'Matizador de couros e peles'
  },
  {
    value: '762345',
    label: 'Vaqueador de couros e peles'
  },
  {
    value: '762330',
    label: 'Prensador de couros e peles'
  },
  {
    value: '762335',
    label: 'Palecionador de couros e peles'
  },
  {
    value: '762340',
    label: 'Preparador de couros curtidos'
  },
  {
    value: '762325',
    label: 'Operador de m\u00e1quinas do acabamento de couros e peles'
  },
  {
    value: '763020',
    label: 'Costureiro de roupa de couro e pele'
  },
  {
    value: '763005',
    label: 'Alfaiate'
  },
  {
    value: '763010',
    label: 'Costureira de pe\u00e7as sob encomenda'
  },
  {
    value: '763015',
    label: 'Costureira de repara\u00e7\u00e3o de roupas'
  },
  {
    value: '763125',
    label: 'Ajudante de confec\u00e7\u00e3o'
  },
  {
    value: '763120',
    label: 'Riscador de roupas'
  },
  {
    value: '763115',
    label: 'Enfestador de roupas'
  },
  {
    value: '763105',
    label: 'Auxiliar de corte (prepara\u00e7\u00e3o da confec\u00e7\u00e3o de roupas)'
  },
  {
    value: '763110',
    label: 'Cortador de roupas'
  },
  {
    value: '763215',
    label: 'Costureiro, a  m\u00e1quina  na confec\u00e7\u00e3o em s\u00e9rie'
  },
  {
    value: '763210',
    label: 'Costureiro na confec\u00e7\u00e3o em s\u00e9rie'
  },
  {
    value: '763205',
    label: 'Costureiro de roupas de couro e pele, a  m\u00e1quina na  confec\u00e7\u00e3o em s\u00e9rie'
  },
  {
    value: '763310',
    label: 'Bordador, \u00e0 m\u00e1quina'
  },
  {
    value: '763315',
    label: 'Marcador de pe\u00e7as confeccionadas para bordar'
  },
  {
    value: '763320',
    label: 'Operador de m\u00e1quina de costura de acabamento'
  },
  {
    value: '763325',
    label: 'Passadeira de pe\u00e7as confeccionadas'
  },
  {
    value: '763305',
    label: 'Arrematadeira'
  },
  {
    value: '764005',
    label: 'Trabalhador polivalente da confec\u00e7\u00e3o de cal\u00e7ados'
  },
  {
    value: '764110',
    label: 'Cortador de solas e palmilhas, a  m\u00e1quina'
  },
  {
    value: '764105',
    label: 'Cortador de cal\u00e7ados, a  m\u00e1quina (exceto solas e palmilhas)'
  },
  {
    value: '764115',
    label: 'Preparador de cal\u00e7ados'
  },
  {
    value: '764120',
    label: 'Preparador de solas e palmilhas'
  },
  {
    value: '764205',
    label: 'Costurador de cal\u00e7ados, a  m\u00e1quina'
  },
  {
    value: '764210',
    label: 'Montador de cal\u00e7ados'
  },
  {
    value: '764305',
    label: 'Acabador de cal\u00e7ados'
  },
  {
    value: '765010',
    label: 'Chapeleiro de senhoras'
  },
  {
    value: '765005',
    label: 'Confeccionador de artefatos de couro (exceto sapatos)'
  },
  {
    value: '765015',
    label: 'Boneleiro'
  },
  {
    value: '765105',
    label: 'Cortador de artefatos de couro (exceto roupas e cal\u00e7ados)'
  },
  {
    value: '765110',
    label: 'Cortador de tape\u00e7aria'
  },
  {
    value: '765240',
    label: 'Tapeceiro de autos'
  },
  {
    value: '765235',
    label: 'Estofador de m\u00f3veis'
  },
  {
    value: '765225',
    label: 'Confeccionador de velas n\u00e1uticas, barracas e toldos'
  },
  {
    value: '765215',
    label: 'Confeccionador de brinquedos de pano'
  },
  {
    value: '765205',
    label: 'Colchoeiro (confec\u00e7\u00e3o de colch\u00f5es)'
  },
  {
    value: '765230',
    label: 'Estofador de avi\u00f5es'
  },
  {
    value: '765310',
    label: 'Costurador de artefatos de couro, a  m\u00e1quina (exceto roupas e cal\u00e7ados)'
  },
  {
    value: '765315',
    label: 'Montador de artefatos de couro (exceto roupas e cal\u00e7ados)'
  },
  {
    value: '765405',
    label: 'Trabalhador do acabamento de artefatos de tecidos e couros'
  },
  {
    value: '766115',
    label: 'Gravador de matriz para flexografia (clicherista)'
  },
  {
    value: '766105',
    label: 'Copiador de chapa'
  },
  {
    value: '766155',
    label: 'Programador visual gr\u00e1fico'
  },
  {
    value: '766150',
    label: 'Operador de processo de tratamento de imagem'
  },
  {
    value: '766145',
    label: 'Operador de sistemas de prova (anal\u00f3gico e digital)'
  },
  {
    value: '766140',
    label: 'Gravador de matriz serigr\u00e1fica'
  },
  {
    value: '766135',
    label: 'Gravador de matriz calcogr\u00e1fica'
  },
  {
    value: '766130',
    label: 'Gravador de matriz para rotogravura (eletromec\u00e2nico e qu\u00edmico)'
  },
  {
    value: '766125',
    label: 'Montador de fotolito (anal\u00f3gico e digital)'
  },
  {
    value: '766120',
    label: 'Editor de texto e imagem'
  },
  {
    value: '766230',
    label: 'Impressor digital'
  },
  {
    value: '766225',
    label: 'Impressor de rotogravura'
  },
  {
    value: '766220',
    label: 'Impressor de rotativa'
  },
  {
    value: '766215',
    label: 'Impressor de ofsete (plano e rotativo)'
  },
  {
    value: '766240',
    label: 'Impressor letterset'
  },
  {
    value: '766205',
    label: 'Impressor (serigrafia)'
  },
  {
    value: '766235',
    label: 'Impressor flexogr\u00e1fico'
  },
  {
    value: '766245',
    label: 'Impressor tampogr\u00e1fico'
  },
  {
    value: '766250',
    label: 'Impressor tipogr\u00e1fico'
  },
  {
    value: '766210',
    label: 'Impressor calcogr\u00e1fico'
  },
  {
    value: '766310',
    label: 'Impressor de corte e vinco'
  },
  {
    value: '766305',
    label: 'Acabador de embalagens (flex\u00edveis e cartot\u00e9cnicas)'
  },
  {
    value: '766320',
    label: 'Operador de guilhotina (corte de papel)'
  },
  {
    value: '766315',
    label: 'Operador de acabamento (ind\u00fastria gr\u00e1fica)'
  },
  {
    value: '766325',
    label: 'Preparador de matrizes de corte e vinco'
  },
  {
    value: '766405',
    label: 'Laboratorista fotogr\u00e1fico'
  },
  {
    value: '766410',
    label: 'Revelador de filmes fotogr\u00e1ficos, em preto e branco'
  },
  {
    value: '766420',
    label: 'Auxiliar de radiologia (revela\u00e7\u00e3o fotogr\u00e1fica)'
  },
  {
    value: '766415',
    label: 'Revelador de filmes fotogr\u00e1ficos, em cores'
  },
  {
    value: '768105',
    label: 'Tecel\u00e3o (tear manual)'
  },
  {
    value: '768130',
    label: 'Crocheteiro, a  m\u00e3o'
  },
  {
    value: '768125',
    label: 'Chapeleiro (chap\u00e9us de palha)'
  },
  {
    value: '768120',
    label: 'Redeiro'
  },
  {
    value: '768115',
    label: 'Tricoteiro, \u00e0 m\u00e3o'
  },
  {
    value: '768110',
    label: 'Tecel\u00e3o de tapetes, a  m\u00e3o'
  },
  {
    value: '768205',
    label: 'Bordador, a  m\u00e3o'
  },
  {
    value: '768210',
    label: 'Cerzidor'
  },
  {
    value: '768315',
    label: 'Costurador de artefatos de couro, a  m\u00e3o (exceto roupas e cal\u00e7ados)'
  },
  {
    value: '768320',
    label: 'Sapateiro (cal\u00e7ados sob medida)'
  },
  {
    value: '768325',
    label: 'Seleiro'
  },
  {
    value: '768305',
    label: 'Art\u00edfice do couro'
  },
  {
    value: '768310',
    label: 'Cortador de cal\u00e7ados, a  m\u00e3o (exceto solas)'
  },
  {
    value: '768605',
    label: 'Tip\u00f3grafo'
  },
  {
    value: '768630',
    label: 'Confeccionador de carimbos de borracha'
  },
  {
    value: '768625',
    label: 'Pintor de letreiros'
  },
  {
    value: '768620',
    label: 'Paginador'
  },
  {
    value: '768615',
    label: 'Monotipista'
  },
  {
    value: '768610',
    label: 'Linotipista'
  },
  {
    value: '768705',
    label: 'Gravador, \u00e0 m\u00e3o (encaderna\u00e7\u00e3o)'
  },
  {
    value: '768710',
    label: 'Restaurador de livros'
  },
  {
    value: '770105',
    label: 'Mestre (ind\u00fastria de madeira e mobili\u00e1rio)'
  },
  {
    value: '770110',
    label: 'Mestre carpinteiro'
  },
  {
    value: '771120',
    label: 'Tanoeiro'
  },
  {
    value: '771115',
    label: 'Maquetista na marcenaria'
  },
  {
    value: '771110',
    label: 'Modelador de madeira'
  },
  {
    value: '771105',
    label: 'Marceneiro'
  },
  {
    value: '772105',
    label: 'Classificador de madeira'
  },
  {
    value: '772110',
    label: 'Impregnador de madeira'
  },
  {
    value: '772115',
    label: 'Secador de madeira'
  },
  {
    value: '773125',
    label: 'Serrador de madeira (serra circular m\u00faltipla)'
  },
  {
    value: '773130',
    label: 'Serrador de madeira (serra de fita m\u00faltipla)'
  },
  {
    value: '773120',
    label: 'Serrador de madeira'
  },
  {
    value: '773115',
    label: 'Serrador de bordas no desdobramento de madeira'
  },
  {
    value: '773105',
    label: 'Cortador de laminados de madeira'
  },
  {
    value: '773110',
    label: 'Operador de serras no desdobramento de madeira'
  },
  {
    value: '773220',
    label: 'Preparador de aglomerantes'
  },
  {
    value: '773215',
    label: 'Prensista de compensados'
  },
  {
    value: '773210',
    label: 'Prensista de aglomerados'
  },
  {
    value: '773205',
    label: 'Operador de m\u00e1quina intercaladora e placas (compensados)'
  },
  {
    value: '773315',
    label: 'Operador de fresadora (usinagem de madeira)'
  },
  {
    value: '773355',
    label: 'Torneiro na usinagem convencional de madeira'
  },
  {
    value: '773350',
    label: 'Operador de tupia (usinagem de madeira)'
  },
  {
    value: '773345',
    label: 'Operador de torno autom\u00e1tico (usinagem de madeira)'
  },
  {
    value: '773340',
    label: 'Operador de serras (usinagem de madeira)'
  },
  {
    value: '773335',
    label: 'Operador de plaina desengrossadeira'
  },
  {
    value: '773330',
    label: 'Operador de molduradora (usinagem de madeira)'
  },
  {
    value: '773325',
    label: 'Operador de m\u00e1quina de usinagem madeira, em geral'
  },
  {
    value: '773320',
    label: 'Operador de lixadeira (usinagem de madeira)'
  },
  {
    value: '773310',
    label: 'Operador de entalhadeira (usinagem de madeira)'
  },
  {
    value: '773305',
    label: 'Operador de desempenadeira na usinagem convencional de madeira'
  },
  {
    value: '773410',
    label: 'Operador de m\u00e1quina de cortina d\u00b4\u00e1gua (produ\u00e7\u00e3o de m\u00f3veis)'
  },
  {
    value: '773405',
    label: 'Operador de m\u00e1quina bordatriz'
  },
  {
    value: '773415',
    label: 'Operador de m\u00e1quina de usinagem de madeira (produ\u00e7\u00e3o em s\u00e9rie)'
  },
  {
    value: '773420',
    label: 'Operador de prensa de alta freq\u00fc\u00eancia na usinagem de madeira'
  },
  {
    value: '773505',
    label: 'Operador de centro de usinagem de madeira (cnc)'
  },
  {
    value: '773510',
    label: 'Operador de m\u00e1quinas de usinar madeira (cnc)'
  },
  {
    value: '774105',
    label: 'Montador de m\u00f3veis e artefatos de madeira'
  },
  {
    value: '775115',
    label: 'Lustrador de pe\u00e7as de madeira'
  },
  {
    value: '775110',
    label: 'Folheador de m\u00f3veis de madeira'
  },
  {
    value: '775105',
    label: 'Entalhador  de madeira'
  },
  {
    value: '775120',
    label: 'Marcheteiro'
  },
  {
    value: '776430',
    label: 'Vassoureiro'
  },
  {
    value: '776415',
    label: 'Confeccionador de escovas, pinc\u00e9is e produtos similares (a m\u00e1quina)'
  },
  {
    value: '776420',
    label: 'Confeccionador de m\u00f3veis de vime, junco e bambu'
  },
  {
    value: '776410',
    label: 'Confeccionador de escovas, pinc\u00e9is e produtos similares (a m\u00e3o)'
  },
  {
    value: '776425',
    label: 'Esteireiro'
  },
  {
    value: '776405',
    label: 'Cesteiro'
  },
  {
    value: '777110',
    label: 'Carpinteiro naval (embarca\u00e7\u00f5es)'
  },
  {
    value: '777115',
    label: 'Carpinteiro naval (estaleiros)'
  },
  {
    value: '777105',
    label: 'Carpinteiro naval (constru\u00e7\u00e3o de pequenas embarca\u00e7\u00f5es)'
  },
  {
    value: '777205',
    label: 'Carpinteiro de carretas'
  },
  {
    value: '777210',
    label: 'Carpinteiro de carrocerias'
  },
  {
    value: '780105',
    label: 'Supervisor de embalagem e etiquetagem'
  },
  {
    value: '781110',
    label: 'Condutor de processos robotizados de soldagem'
  },
  {
    value: '781105',
    label: 'Condutor de processos robotizados de pintura'
  },
  {
    value: '781305',
    label: 'Operador de ve\u00edculos subaqu\u00e1ticos controlados remotamente'
  },
  {
    value: '781705',
    label: 'Mergulhador profissional (raso e profundo)'
  },
  {
    value: '782115',
    label: 'Operador de guindaste m\u00f3vel'
  },
  {
    value: '782110',
    label: 'Operador de guindaste (fixo)'
  },
  {
    value: '782105',
    label: 'Operador de draga'
  },
  {
    value: '782120',
    label: 'Operador de m\u00e1quina rodoferrovi\u00e1ria'
  },
  {
    value: '782140',
    label: 'Operador de talha el\u00e9trica'
  },
  {
    value: '782145',
    label: 'Sinaleiro (ponte-rolante)'
  },
  {
    value: '782135',
    label: 'Operador de p\u00f3rtico rolante'
  },
  {
    value: '782130',
    label: 'Operador de ponte rolante'
  },
  {
    value: '782125',
    label: 'Operador de monta-cargas (constru\u00e7\u00e3o civil)'
  },
  {
    value: '782205',
    label: 'Guincheiro (constru\u00e7\u00e3o civil)'
  },
  {
    value: '782210',
    label: 'Operador de docagem'
  },
  {
    value: '782220',
    label: 'Operador de empilhadeira'
  },
  {
    value: '782320',
    label: 'Condutor de ambul\u00e2ncia'
  },
  {
    value: '782305',
    label: 'Motorista de carro de passeio'
  },
  {
    value: '782310',
    label: 'Motorista de furg\u00e3o ou ve\u00edculo similar'
  },
  {
    value: '782315',
    label: 'Motorista de t\u00e1xi'
  },
  {
    value: '782410',
    label: 'Motorista de \u00f4nibus urbano'
  },
  {
    value: '782405',
    label: 'Motorista de \u00f4nibus rodovi\u00e1rio'
  },
  {
    value: '782415',
    label: 'Motorista de tr\u00f3lebus'
  },
  {
    value: '782505',
    label: 'Caminhoneiro aut\u00f4nomo (rotas regionais e internacionais)'
  },
  {
    value: '782510',
    label: 'Motorista de caminh\u00e3o (rotas regionais e internacionais)'
  },
  {
    value: '782515',
    label: 'Motorista operacional de guincho'
  },
  {
    value: '782615',
    label: 'Maquinista de trem metropolitano'
  },
  {
    value: '782610',
    label: 'Maquinista de trem'
  },
  {
    value: '782630',
    label: 'Operador de telef\u00e9rico (passageiros)'
  },
  {
    value: '782605',
    label: 'Operador de trem de metr\u00f4'
  },
  {
    value: '782625',
    label: 'Auxiliar de maquinista de trem'
  },
  {
    value: '782620',
    label: 'Motorneiro'
  },
  {
    value: '782735',
    label: 'Marinheiro auxiliar de m\u00e1quinas (mar\u00edtimo e aquavi\u00e1rio)'
  },
  {
    value: '782730',
    label: 'Marinheiro auxiliar de conv\u00e9s (mar\u00edtimo e aquaviario)'
  },
  {
    value: '782725',
    label: 'Marinheiro de esporte e recreio'
  },
  {
    value: '782720',
    label: 'Mo\u00e7o de m\u00e1quinas (mar\u00edtimo e fluvi\u00e1rio)'
  },
  {
    value: '782715',
    label: 'Mo\u00e7o de conv\u00e9s (mar\u00edtimo e fluvi\u00e1rio)'
  },
  {
    value: '782705',
    label: 'Marinheiro de conv\u00e9s (mar\u00edtimo e fluvi\u00e1rio)'
  },
  {
    value: '782710',
    label: 'Marinheiro de m\u00e1quinas'
  },
  {
    value: '782820',
    label: 'Condutor de ve\u00edculos a pedais'
  },
  {
    value: '782815',
    label: 'Boiadeiro'
  },
  {
    value: '782810',
    label: 'Tropeiro'
  },
  {
    value: '782805',
    label: 'Condutor de ve\u00edculos de tra\u00e7\u00e3o animal (ruas e estradas)'
  },
  {
    value: '783105',
    label: 'Agente de p\u00e1tio'
  },
  {
    value: '783110',
    label: 'Manobrador'
  },
  {
    value: '783205',
    label: 'Carregador (aeronaves)'
  },
  {
    value: '783210',
    label: 'Carregador (armaz\u00e9m)'
  },
  {
    value: '783215',
    label: 'Carregador (ve\u00edculos de transportes terrestres)'
  },
  {
    value: '783220',
    label: 'Estivador'
  },
  {
    value: '783235',
    label: 'Trabalhador portu\u00e1rio de capatazia'
  },
  {
    value: '783230',
    label: 'Bloqueiro (trabalhador portu\u00e1rio)'
  },
  {
    value: '783225',
    label: 'Ajudante de motorista'
  },
  {
    value: '784105',
    label: 'Embalador, a m\u00e3o'
  },
  {
    value: '784110',
    label: 'Embalador, a m\u00e1quina'
  },
  {
    value: '784115',
    label: 'Operador de m\u00e1quina de etiquetar'
  },
  {
    value: '784120',
    label: 'Operador de m\u00e1quina de envasar l\u00edquidos'
  },
  {
    value: '784125',
    label: 'Operador de prensa de enfardamento'
  },
  {
    value: '784205',
    label: 'Alimentador de linha de produ\u00e7\u00e3o'
  },
  {
    value: '791105',
    label: 'Artes\u00e3o bordador'
  },
  {
    value: '791110',
    label: 'Artes\u00e3o ceramista'
  },
  {
    value: '791115',
    label: 'Artes\u00e3o com material recicl\u00e1vel'
  },
  {
    value: '791120',
    label: 'Artes\u00e3o confeccionador de bioj\u00f3ias e ecoj\u00f3ias'
  },
  {
    value: '791125',
    label: 'Artes\u00e3o do couro'
  },
  {
    value: '791160',
    label: 'Artes\u00e3o rendeiro'
  },
  {
    value: '791135',
    label: 'Artes\u00e3o moveleiro (exceto reciclado)'
  },
  {
    value: '791140',
    label: 'Artes\u00e3o tecel\u00e3o'
  },
  {
    value: '791145',
    label: 'Artes\u00e3o tran\u00e7ador'
  },
  {
    value: '791150',
    label: 'Artes\u00e3o crocheteiro'
  },
  {
    value: '791155',
    label: 'Artes\u00e3o tricoteiro'
  },
  {
    value: '791130',
    label: 'Artes\u00e3o escultor'
  },
  {
    value: '810110',
    label: 'Mestre de produ\u00e7\u00e3o qu\u00edmica'
  },
  {
    value: '810105',
    label: 'Mestre (ind\u00fastria petroqu\u00edmica e carboqu\u00edmica)'
  },
  {
    value: '810205',
    label: 'Mestre (ind\u00fastria de borracha e pl\u00e1stico)'
  },
  {
    value: '810305',
    label: 'Mestre de produ\u00e7\u00e3o farmac\u00eautica'
  },
  {
    value: '811005',
    label: 'Operador de processos qu\u00edmicos e petroqu\u00edmicos'
  },
  {
    value: '811010',
    label: 'Operador de sala de controle de instala\u00e7\u00f5es qu\u00edmicas, petroqu\u00edmicas e afins'
  },
  {
    value: '811105',
    label: 'Moleiro (tratamentos qu\u00edmicos e afins)'
  },
  {
    value: '811115',
    label: 'Operador de britadeira (tratamentos qu\u00edmicos e afins)'
  },
  {
    value: '811120',
    label: 'Operador de concentra\u00e7\u00e3o'
  },
  {
    value: '811125',
    label: 'Trabalhador da fabrica\u00e7\u00e3o de resinas e vernizes'
  },
  {
    value: '811130',
    label: 'Trabalhador de fabrica\u00e7\u00e3o de tintas'
  },
  {
    value: '811110',
    label: 'Operador de m\u00e1quina misturadeira (tratamentos qu\u00edmicos e afins)'
  },
  {
    value: '811215',
    label: 'Operador de tratamento qu\u00edmico de materiais radioativos'
  },
  {
    value: '811205',
    label: 'Operador de calcina\u00e7\u00e3o (tratamento qu\u00edmico e afins)'
  },
  {
    value: '811330',
    label: 'Operador de filtro-prensa (tratamentos qu\u00edmicos e afins)'
  },
  {
    value: '811335',
    label: 'Operador de filtros de parafina (tratamentos qu\u00edmicos e afins)'
  },
  {
    value: '811325',
    label: 'Operador de filtro-esteira (minera\u00e7\u00e3o)'
  },
  {
    value: '811320',
    label: 'Operador de filtro de tambor rotativo (tratamentos qu\u00edmicos e afins)'
  },
  {
    value: '811315',
    label: 'Operador de filtro de secagem (minera\u00e7\u00e3o)'
  },
  {
    value: '811310',
    label: 'Operador de explora\u00e7\u00e3o de petr\u00f3leo'
  },
  {
    value: '811305',
    label: 'Operador de centrifugadora (tratamentos qu\u00edmicos e afins)'
  },
  {
    value: '811410',
    label: 'Destilador de produtos qu\u00edmicos (exceto petr\u00f3leo)'
  },
  {
    value: '811405',
    label: 'Destilador de madeira'
  },
  {
    value: '811415',
    label: 'Operador de alambique de funciolabelnto cont\u00ednuo (produtos qu\u00edmicos, exceto petr\u00f3leo)'
  },
  {
    value: '811420',
    label: 'Operador de aparelho de rea\u00e7\u00e3o e convers\u00e3o (produtos qu\u00edmicos, exceto petr\u00f3leo)'
  },
  {
    value: '811425',
    label: 'Operador de equipamento de destila\u00e7\u00e3o de \u00e1lcool'
  },
  {
    value: '811430',
    label: 'Operador de evaporador na destila\u00e7\u00e3o'
  },
  {
    value: '811505',
    label: 'Operador de painel de controle (refina\u00e7\u00e3o de petr\u00f3leo)'
  },
  {
    value: '811510',
    label: 'Operador de transfer\u00eancia e estocagem - na refina\u00e7\u00e3o do petr\u00f3leo'
  },
  {
    value: '811610',
    label: 'Operador de carro de apagamento e coque'
  },
  {
    value: '811605',
    label: 'Operador de britador de coque'
  },
  {
    value: '811615',
    label: 'Operador de destila\u00e7\u00e3o e subprodutos de coque'
  },
  {
    value: '811650',
    label: 'Operador de sistema de revers\u00e3o (coqueria)'
  },
  {
    value: '811645',
    label: 'Operador de refrigera\u00e7\u00e3o (coqueria)'
  },
  {
    value: '811640',
    label: 'Operador de reator de coque de petr\u00f3leo'
  },
  {
    value: '811635',
    label: 'Operador de preserva\u00e7\u00e3o e controle t\u00e9rmico'
  },
  {
    value: '811630',
    label: 'Operador de painel de controle'
  },
  {
    value: '811625',
    label: 'Operador de exaustor (coqueria)'
  },
  {
    value: '811620',
    label: 'Operador de enforlabelnto e desenforlabelnto de coque'
  },
  {
    value: '811705',
    label: 'Bamburista'
  },
  {
    value: '811710',
    label: 'Calandrista de borracha'
  },
  {
    value: '811715',
    label: 'Confeccionador de pneum\u00e1ticos'
  },
  {
    value: '811725',
    label: 'Confeccionador de velas por imers\u00e3o'
  },
  {
    value: '811775',
    label: 'Trefilador de borracha'
  },
  {
    value: '811745',
    label: 'Laminador de pl\u00e1stico'
  },
  {
    value: '811750',
    label: 'Moldador de borracha por compress\u00e3o'
  },
  {
    value: '811760',
    label: 'Moldador de pl\u00e1stico por compress\u00e3o'
  },
  {
    value: '811770',
    label: 'Moldador de pl\u00e1stico por inje\u00e7\u00e3o'
  },
  {
    value: '811735',
    label: 'Confeccionador de velas por moldagem'
  },
  {
    value: '811805',
    label: 'Operador de m\u00e1quina de produtos farmac\u00eauticos'
  },
  {
    value: '811810',
    label: 'Drageador (medicamentos)'
  },
  {
    value: '811820',
    label:
      'Operador de m\u00e1quina de fabrica\u00e7\u00e3o de produtos de higiene e limpeza (sab\u00e3o, sabonete, detergente, absorvente, fraldas cotonetes e outros)'
  },
  {
    value: '811815',
    label: 'Operador de m\u00e1quina de fabrica\u00e7\u00e3o de cosm\u00e9ticos'
  },
  {
    value: '812105',
    label: 'Pirot\u00e9cnico'
  },
  {
    value: '812110',
    label: 'Trabalhador da fabrica\u00e7\u00e3o de muni\u00e7\u00e3o e explosivos'
  },
  {
    value: '813125',
    label: 'Operador de produ\u00e7\u00e3o (qu\u00edmica, petroqu\u00edmica e afins)'
  },
  {
    value: '813110',
    label: 'Operador de calandra (qu\u00edmica, petroqu\u00edmica e afins)'
  },
  {
    value: '813130',
    label: 'T\u00e9cnico de opera\u00e7\u00e3o (qu\u00edmica, petroqu\u00edmica e afins)'
  },
  {
    value: '813120',
    label: 'Operador de processo (qu\u00edmica, petroqu\u00edmica e afins)'
  },
  {
    value: '813115',
    label: 'Operador de extrusora (qu\u00edmica, petroqu\u00edmica e afins)'
  },
  {
    value: '813105',
    label: 'Cilindrista (petroqu\u00edmica e afins)'
  },
  {
    value: '818110',
    label: 'Auxiliar de laborat\u00f3rio de an\u00e1lises f\u00edsico-qu\u00edmicas'
  },
  {
    value: '818105',
    label: 'Assistente de laborat\u00f3rio industrial'
  },
  {
    value: '820105',
    label: 'Mestre de siderurgia'
  },
  {
    value: '820110',
    label: 'Mestre de aciaria'
  },
  {
    value: '820115',
    label: 'Mestre de alto-forno'
  },
  {
    value: '820120',
    label: 'Mestre de forno el\u00e9trico'
  },
  {
    value: '820125',
    label: 'Mestre de lamina\u00e7\u00e3o'
  },
  {
    value: '820205',
    label: 'Supervisor de fabrica\u00e7\u00e3o de produtos cer\u00e2micos, porcelanatos e afins'
  },
  {
    value: '820210',
    label: 'Supervisor de fabrica\u00e7\u00e3o de produtos de vidro'
  },
  {
    value: '821105',
    label: 'Operador de centro de controle'
  },
  {
    value: '821110',
    label: 'Operador de m\u00e1quina de sinterizar'
  },
  {
    value: '821210',
    label: 'Forneiro e operador (conversor a oxig\u00eanio)'
  },
  {
    value: '821215',
    label: 'Forneiro e operador (forno el\u00e9trico)'
  },
  {
    value: '821220',
    label: 'Forneiro e operador (refino de metais n\u00e3o-ferrosos)'
  },
  {
    value: '821225',
    label: 'Forneiro e operador de forno de redu\u00e7\u00e3o direta'
  },
  {
    value: '821230',
    label: 'Operador de aciaria (basculamento de convertedor)'
  },
  {
    value: '821235',
    label: 'Operador de aciaria (dessulfura\u00e7\u00e3o de gusa)'
  },
  {
    value: '821240',
    label: 'Operador de aciaria (recebimento de gusa)'
  },
  {
    value: '821245',
    label: 'Operador de \u00e1rea de corrida'
  },
  {
    value: '821250',
    label: 'Operador de desgaseifica\u00e7\u00e3o'
  },
  {
    value: '821255',
    label: 'Soprador de convertedor'
  },
  {
    value: '821205',
    label: 'Forneiro e operador (alto-forno)'
  },
  {
    value: '821315',
    label: 'Operador de laminador de barras a quente'
  },
  {
    value: '821310',
    label: 'Operador de laminador de barras a frio'
  },
  {
    value: '821305',
    label: 'Operador de laminador'
  },
  {
    value: '821320',
    label: 'Operador de laminador de metais n\u00e3o-ferrosos'
  },
  {
    value: '821325',
    label: 'Operador de laminador de tubos'
  },
  {
    value: '821330',
    label: 'Operador de montagem de cilindros e mancais'
  },
  {
    value: '821335',
    label: 'Recuperador de guias e cilindros'
  },
  {
    value: '821415',
    label: 'Marcador de produtos (sider\u00fargico e metal\u00fargico)'
  },
  {
    value: '821410',
    label: 'Escarfador'
  },
  {
    value: '821405',
    label: 'Encarregado de acabamento de chapas e metais  (t\u00eampera)'
  },
  {
    value: '821420',
    label: 'Operador de bobinadeira de tiras a quente, no acabamento de chapas e metais'
  },
  {
    value: '821450',
    label: 'Rebarbador de metal'
  },
  {
    value: '821445',
    label: 'Preparador de sucata e aparas'
  },
  {
    value: '821440',
    label: 'Operador de tesoura mec\u00e2nica e m\u00e1quina de corte, no acabamento de chapas e metais'
  },
  {
    value: '821435',
    label: 'Operador de jato abrasivo'
  },
  {
    value: '821425',
    label: 'Operador de cabine de lamina\u00e7\u00e3o (fio-m\u00e1quina)'
  },
  {
    value: '821430',
    label: 'Operador de esc\u00f3ria e sucata'
  },
  {
    value: '822110',
    label: 'Forneiro de forno-po\u00e7o'
  },
  {
    value: '822105',
    label: 'Forneiro de cubil\u00f4'
  },
  {
    value: '822120',
    label: 'Forneiro de reaquecimento e tratamento t\u00e9rmico na metalurgia'
  },
  {
    value: '822115',
    label: 'Forneiro de fundi\u00e7\u00e3o (forno de redu\u00e7\u00e3o)'
  },
  {
    value: '822125',
    label: 'Forneiro de rev\u00e9rbero'
  },
  {
    value: '823105',
    label: 'Preparador de massa (fabrica\u00e7\u00e3o de abrasivos)'
  },
  {
    value: '823135',
    label: 'Operador de atomizador'
  },
  {
    value: '823130',
    label: 'Preparador de aditivos'
  },
  {
    value: '823125',
    label: 'Preparador de esmaltes (cer\u00e2mica)'
  },
  {
    value: '823120',
    label: 'Preparador de barbotina'
  },
  {
    value: '823115',
    label: 'Preparador de massa de argila'
  },
  {
    value: '823110',
    label: 'Preparador de massa (fabrica\u00e7\u00e3o de vidro)'
  },
  {
    value: '823210',
    label: 'Extrusor de fios ou fibras de vidro'
  },
  {
    value: '823215',
    label: 'Forneiro na fundi\u00e7\u00e3o de vidro'
  },
  {
    value: '823265',
    label: 'Trabalhador na fabrica\u00e7\u00e3o de produtos abrasivos'
  },
  {
    value: '823255',
    label: 'Temperador de vidro'
  },
  {
    value: '823250',
    label: 'Operador de prensa de moldar vidro'
  },
  {
    value: '823245',
    label: 'Operador de m\u00e1quina extrusora de varetas e tubos de vidro'
  },
  {
    value: '823240',
    label: 'Operador de m\u00e1quina de soprar vidro'
  },
  {
    value: '823235',
    label: 'Operador de banho met\u00e1lico de vidro por flutua\u00e7\u00e3o'
  },
  {
    value: '823220',
    label: 'Forneiro no recozimento de vidro'
  },
  {
    value: '823230',
    label: 'Moldador de abrasivos na fabrica\u00e7\u00e3o de cer\u00e2mica, vidro e porcelana'
  },
  {
    value: '823320',
    label: 'Trabalhador da elabora\u00e7\u00e3o de pr\u00e9-fabricados (cimento amianto)'
  },
  {
    value: '823325',
    label: 'Trabalhador da elabora\u00e7\u00e3o de pr\u00e9-fabricados (concreto armado)'
  },
  {
    value: '823330',
    label: 'Trabalhador da fabrica\u00e7\u00e3o de pedras artificiais'
  },
  {
    value: '823305',
    label: 'Classificador e empilhador de tijolos refrat\u00e1rios'
  },
  {
    value: '823315',
    label: 'Forneiro (materiais de constru\u00e7\u00e3o)'
  },
  {
    value: '828105',
    label: 'Oleiro (fabrica\u00e7\u00e3o de telhas)'
  },
  {
    value: '828110',
    label: 'Oleiro (fabrica\u00e7\u00e3o de tijolos)'
  },
  {
    value: '830105',
    label: 'Mestre (ind\u00fastria de celulose, papel e papel\u00e3o)'
  },
  {
    value: '831105',
    label: 'Cilindreiro na prepara\u00e7\u00e3o de pasta para fabrica\u00e7\u00e3o de papel'
  },
  {
    value: '831110',
    label: 'Operador de branqueador de pasta para fabrica\u00e7\u00e3o de papel'
  },
  {
    value: '831115',
    label: 'Operador de digestor de pasta para fabrica\u00e7\u00e3o de papel'
  },
  {
    value: '831120',
    label: 'Operador de lavagem e depura\u00e7\u00e3o de pasta para fabrica\u00e7\u00e3o de papel'
  },
  {
    value: '831125',
    label: 'Operador de m\u00e1quina de secar celulose'
  },
  {
    value: '832110',
    label: 'Operador de cortadeira de papel'
  },
  {
    value: '832105',
    label: 'Calandrista de papel'
  },
  {
    value: '832115',
    label: 'Operador de m\u00e1quina de fabricar papel  (fase \u00famida)'
  },
  {
    value: '832135',
    label: 'Operador de rebobinadeira na fabrica\u00e7\u00e3o de papel e papel\u00e3o'
  },
  {
    value: '832125',
    label: 'Operador de m\u00e1quina de fabricar papel e papel\u00e3o'
  },
  {
    value: '832120',
    label: 'Operador de m\u00e1quina de fabricar papel (fase seca)'
  },
  {
    value: '833105',
    label: 'Cartonageiro, a m\u00e1quina'
  },
  {
    value: '833110',
    label: 'Confeccionador de bolsas, sacos e sacolas e papel, a m\u00e1quina'
  },
  {
    value: '833125',
    label: 'Operador de prensa de embutir papel\u00e3o'
  },
  {
    value: '833120',
    label: 'Operador de m\u00e1quina de cortar e dobrar papel\u00e3o'
  },
  {
    value: '833115',
    label: 'Confeccionador de sacos de celofane, a m\u00e1quina'
  },
  {
    value: '833205',
    label: 'Cartonageiro, a m\u00e3o (caixas de papel\u00e3o)'
  },
  {
    value: '840110',
    label: 'Supervisor da ind\u00fastria de bebidas'
  },
  {
    value: '840120',
    label: 'Chefe de confeitaria'
  },
  {
    value: '840115',
    label: 'Supervisor da ind\u00fastria de fumo'
  },
  {
    value: '840105',
    label: 'Supervisor de produ\u00e7\u00e3o da ind\u00fastria aliment\u00edcia'
  },
  {
    value: '841105',
    label: 'Moleiro de cereais (exceto arroz)'
  },
  {
    value: '841110',
    label: 'Moleiro de especiarias'
  },
  {
    value: '841115',
    label: 'Operador de processo de moagem'
  },
  {
    value: '841210',
    label: 'Refinador de sal'
  },
  {
    value: '841205',
    label: 'Moedor de sal'
  },
  {
    value: '841310',
    label: 'Operador de equipamentos de refina\u00e7\u00e3o de a\u00e7\u00facar (processo cont\u00ednuo)'
  },
  {
    value: '841305',
    label: 'Operador de cristaliza\u00e7\u00e3o na refina\u00e7\u00e3o de a\u00e7ucar'
  },
  {
    value: '841320',
    label: 'Operador de tratamento de calda na refina\u00e7\u00e3o de a\u00e7\u00facar'
  },
  {
    value: '841315',
    label: 'Operador de moenda na fabrica\u00e7\u00e3o de a\u00e7\u00facar'
  },
  {
    value: '841484',
    label: 'Trabalhador de prepara\u00e7\u00e3o de pescados (limpeza)'
  },
  {
    value: '841476',
    label: 'Trabalhador de fabrica\u00e7\u00e3o de margarina'
  },
  {
    value: '841472',
    label: 'Refinador de \u00f3leo e gordura'
  },
  {
    value: '841468',
    label: 'Preparador de ra\u00e7\u00f5es'
  },
  {
    value: '841464',
    label: 'Prensador de frutas (exceto oleaginosas)'
  },
  {
    value: '841460',
    label: 'Operador de prepara\u00e7\u00e3o de gr\u00e3os vegetais (\u00f3leos e gorduras)'
  },
  {
    value: '841456',
    label: 'Operador de c\u00e2maras frias'
  },
  {
    value: '841444',
    label: 'Hidrogenador de \u00f3leos e gorduras'
  },
  {
    value: '841440',
    label: 'Esterilizador de alimentos'
  },
  {
    value: '841432',
    label: 'Desidratador de alimentos'
  },
  {
    value: '841428',
    label: 'Cozinhador de pescado'
  },
  {
    value: '841420',
    label: 'Cozinhador de frutas e legumes'
  },
  {
    value: '841416',
    label: 'Cozinhador de carnes'
  },
  {
    value: '841408',
    label: 'Cozinhador (conserva\u00e7\u00e3o de alimentos)'
  },
  {
    value: '841448',
    label: 'Lagareiro'
  },
  {
    value: '841505',
    label: 'Trabalhador de tratamento do leite e fabrica\u00e7\u00e3o de latic\u00ednios e afins'
  },
  {
    value: '841620',
    label: 'Operador de extra\u00e7\u00e3o de caf\u00e9 sol\u00favel'
  },
  {
    value: '841630',
    label: 'Misturador de ch\u00e1 ou mate'
  },
  {
    value: '841625',
    label: 'Torrador de cacau'
  },
  {
    value: '841605',
    label: 'Misturador de caf\u00e9'
  },
  {
    value: '841610',
    label: 'Torrador de caf\u00e9'
  },
  {
    value: '841615',
    label: 'Moedor de caf\u00e9'
  },
  {
    value: '841735',
    label: 'Dessecador de malte'
  },
  {
    value: '841740',
    label: 'Vinagreiro'
  },
  {
    value: '841745',
    label: 'Xaropeiro'
  },
  {
    value: '841725',
    label: 'Malteiro (germina\u00e7\u00e3o)'
  },
  {
    value: '841730',
    label: 'Cozinhador de malte'
  },
  {
    value: '841720',
    label: 'Trabalhador de fabrica\u00e7\u00e3o de vinhos'
  },
  {
    value: '841705',
    label: 'Alambiqueiro'
  },
  {
    value: '841710',
    label: 'Filtrador de cerveja'
  },
  {
    value: '841715',
    label: 'Fermentador'
  },
  {
    value: '841810',
    label: 'Operador de m\u00e1quinas de fabrica\u00e7\u00e3o de doces, salgados e massas aliment\u00edcias'
  },
  {
    value: '841805',
    label: 'Operador de forno (fabrica\u00e7\u00e3o de p\u00e3es, biscoitos e similares)'
  },
  {
    value: '841815',
    label: 'Operador de m\u00e1quinas de fabrica\u00e7\u00e3o de chocolates e achocolatados'
  },
  {
    value: '842135',
    label: 'Operador de m\u00e1quina de prepara\u00e7\u00e3o de mat\u00e9ria prima para produ\u00e7\u00e3o de cigarros'
  },
  {
    value: '842125',
    label: 'Operador de m\u00e1quina (fabrica\u00e7\u00e3o de cigarros)'
  },
  {
    value: '842120',
    label: 'Auxiliar de processamento de fumo'
  },
  {
    value: '842115',
    label: 'Classificador de fumo'
  },
  {
    value: '842105',
    label: 'Preparador de melado e ess\u00eancia de fumo'
  },
  {
    value: '842110',
    label: 'Processador de fumo'
  },
  {
    value: '842205',
    label: 'Preparador de fumo na fabrica\u00e7\u00e3o de charutos'
  },
  {
    value: '842210',
    label: 'Operador de m\u00e1quina de fabricar charutos e cigarrilhas'
  },
  {
    value: '842215',
    label: 'Classificador de charutos'
  },
  {
    value: '842220',
    label: 'Cortador de charutos'
  },
  {
    value: '842225',
    label: 'Celofanista na fabrica\u00e7\u00e3o de charutos'
  },
  {
    value: '842235',
    label: 'Degustador de charutos'
  },
  {
    value: '842230',
    label: 'Charuteiro a m\u00e3o'
  },
  {
    value: '848110',
    label: 'Salgador de alimentos'
  },
  {
    value: '848105',
    label: 'Defumador de carnes e pescados'
  },
  {
    value: '848115',
    label: 'Salsicheiro (fabrica\u00e7\u00e3o de ling\u00fci\u00e7a, salsicha e produtos similares)'
  },
  {
    value: '848205',
    label: 'Pasteurizador'
  },
  {
    value: '848210',
    label: 'Queijeiro na fabrica\u00e7\u00e3o de latic\u00ednio'
  },
  {
    value: '848215',
    label: 'Manteigueiro na fabrica\u00e7\u00e3o de latic\u00ednio'
  },
  {
    value: '848305',
    label: 'Padeiro'
  },
  {
    value: '848310',
    label: 'Confeiteiro'
  },
  {
    value: '848315',
    label: 'Masseiro (massas aliment\u00edcias)'
  },
  {
    value: '848325',
    label: 'Trabalhador de fabrica\u00e7\u00e3o de sorvete'
  },
  {
    value: '848425',
    label: 'Classificador de gr\u00e3os'
  },
  {
    value: '848420',
    label: 'Degustador de vinhos ou licores'
  },
  {
    value: '848415',
    label: 'Degustador de derivados de cacau'
  },
  {
    value: '848405',
    label: 'Degustador de caf\u00e9'
  },
  {
    value: '848410',
    label: 'Degustador de ch\u00e1'
  },
  {
    value: '848525',
    label: 'Retalhador de carne'
  },
  {
    value: '848515',
    label: 'Desossador'
  },
  {
    value: '848510',
    label: 'A\u00e7ougueiro'
  },
  {
    value: '848505',
    label: 'Abatedor'
  },
  {
    value: '848520',
    label: 'Magarefe'
  },
  {
    value: '848605',
    label: 'Trabalhador do beneficiamento de fumo'
  },
  {
    value: '860105',
    label: 'Supervisor de manuten\u00e7\u00e3o eletromec\u00e2nica (utilidades)'
  },
  {
    value: '860110',
    label:
      'Supervisor de opera\u00e7\u00e3o de fluidos (distribui\u00e7\u00e3o, capta\u00e7\u00e3o, tratamento de \u00e1gua, gases, vapor)'
  },
  {
    value: '860115',
    label:
      'Supervisor de opera\u00e7\u00e3o el\u00e9trica (gera\u00e7\u00e3o, transmiss\u00e3o e distribui\u00e7\u00e3o de energia el\u00e9trica)'
  },
  {
    value: '861120',
    label: 'Operador de reator nuclear'
  },
  {
    value: '861115',
    label: 'Operador de central termoel\u00e9trica'
  },
  {
    value: '861110',
    label: 'Operador de quadro de distribui\u00e7\u00e3o de energia el\u00e9trica'
  },
  {
    value: '861105',
    label: 'Operador de central hidrel\u00e9trica'
  },
  {
    value: '861205',
    label: 'Operador de subesta\u00e7\u00e3o'
  },
  {
    value: '862155',
    label:
      'Operador de utilidade (produ\u00e7\u00e3o e distribui\u00e7\u00e3o de vapor, g\u00e1s, \u00f3leo, combust\u00edvel, energia, oxig\u00eanio)'
  },
  {
    value: '862150',
    label: 'Operador de m\u00e1quinas fixas, em geral'
  },
  {
    value: '862140',
    label: 'Operador de esta\u00e7\u00e3o de bombeamento'
  },
  {
    value: '862130',
    label: 'Operador de compressor de ar'
  },
  {
    value: '862120',
    label: 'Operador de caldeira'
  },
  {
    value: '862115',
    label: 'Operador de bateria de g\u00e1s de hulha'
  },
  {
    value: '862105',
    label: 'Foguista (locomotivas a vapor)'
  },
  {
    value: '862160',
    label: 'Operador de abastecimento de combust\u00edvel de aeronave'
  },
  {
    value: '862110',
    label: 'Maquinista de embarca\u00e7\u00f5es'
  },
  {
    value: '862205',
    label: 'Operador de esta\u00e7\u00e3o de capta\u00e7\u00e3o, tratamento e distribui\u00e7\u00e3o de \u00e1gua'
  },
  {
    value: '862305',
    label: 'Operador de esta\u00e7\u00e3o de tratamento de \u00e1gua e efluentes'
  },
  {
    value: '862310',
    label:
      'Operador de forno de incinera\u00e7\u00e3o no tratamento de \u00e1gua, efluentes e res\u00edduos industriais'
  },
  {
    value: '862405',
    label:
      'Operador de instala\u00e7\u00e3o de extra\u00e7\u00e3o, processamento, envasamento e distribui\u00e7\u00e3o de gases'
  },
  {
    value: '862505',
    label: 'Operador de instala\u00e7\u00e3o de refrigera\u00e7\u00e3o'
  },
  {
    value: '862510',
    label: 'Operador de refrigera\u00e7\u00e3o com am\u00f4nia'
  },
  {
    value: '862515',
    label: 'Operador de instala\u00e7\u00e3o de ar-condicionado'
  },
  {
    value: '910130',
    label: 'Supervisor de manuten\u00e7\u00e3o de m\u00e1quinas operatrizes e de usinagem'
  },
  {
    value: '910110',
    label:
      'Supervisor de manuten\u00e7\u00e3o de aparelhos t\u00e9rmicos, de climatiza\u00e7\u00e3o e de refrigera\u00e7\u00e3o'
  },
  {
    value: '910105',
    label: 'Encarregado de manuten\u00e7\u00e3o mec\u00e2nica de sistemas operacionais'
  },
  {
    value: '910115',
    label: 'Supervisor de manuten\u00e7\u00e3o de bombas, motores, compressores e equipamentos de transmiss\u00e3o'
  },
  {
    value: '910120',
    label: 'Supervisor de manuten\u00e7\u00e3o de m\u00e1quinas gr\u00e1ficas'
  },
  {
    value: '910125',
    label: 'Supervisor de manuten\u00e7\u00e3o de m\u00e1quinas industriais t\u00eaxteis'
  },
  {
    value: '910205',
    label: 'Supervisor da manuten\u00e7\u00e3o e repara\u00e7\u00e3o de ve\u00edculos leves'
  },
  {
    value: '910210',
    label: 'Supervisor da manuten\u00e7\u00e3o e repara\u00e7\u00e3o de ve\u00edculos pesados'
  },
  {
    value: '910910',
    label: 'Supervisor de manuten\u00e7\u00e3o de vias f\u00e9rreas'
  },
  {
    value: '910905',
    label: 'Supervisor de reparos linhas f\u00e9rreas'
  },
  {
    value: '911125',
    label: 'Mec\u00e2nico de manuten\u00e7\u00e3o de redutores'
  },
  {
    value: '911120',
    label: 'Mec\u00e2nico de manuten\u00e7\u00e3o de motores diesel (exceto de ve\u00edculos automotores)'
  },
  {
    value: '911115',
    label: 'Mec\u00e2nico de manuten\u00e7\u00e3o de compressores de ar'
  },
  {
    value: '911110',
    label: 'Mec\u00e2nico de manuten\u00e7\u00e3o de bombas'
  },
  {
    value: '911105',
    label: 'Mec\u00e2nico de manuten\u00e7\u00e3o de bomba injetora (exceto de ve\u00edculos automotores)'
  },
  {
    value: '911130',
    label: 'Mec\u00e2nico de manuten\u00e7\u00e3o de turbinas (exceto de aeronaves)'
  },
  {
    value: '911135',
    label: 'Mec\u00e2nico de manuten\u00e7\u00e3o de turbocompressores'
  },
  {
    value: '911205',
    label:
      'Mec\u00e2nico de manuten\u00e7\u00e3o e instala\u00e7\u00e3o de aparelhos de climatiza\u00e7\u00e3o e  refrigera\u00e7\u00e3o'
  },
  {
    value: '911305',
    label: 'Mec\u00e2nico de manuten\u00e7\u00e3o de m\u00e1quinas, em geral'
  },
  {
    value: '911310',
    label: 'Mec\u00e2nico de manuten\u00e7\u00e3o de m\u00e1quinas gr\u00e1ficas'
  },
  {
    value: '911315',
    label: 'Mec\u00e2nico de manuten\u00e7\u00e3o de m\u00e1quinas operatrizes (lavra de madeira)'
  },
  {
    value: '911320',
    label: 'Mec\u00e2nico de manuten\u00e7\u00e3o de m\u00e1quinas t\u00eaxteis'
  },
  {
    value: '911325',
    label: 'Mec\u00e2nico de manuten\u00e7\u00e3o de m\u00e1quinas-ferramentas (usinagem de metais)'
  },
  {
    value: '913110',
    label: 'Mec\u00e2nico de manuten\u00e7\u00e3o de equipamento de minera\u00e7\u00e3o'
  },
  {
    value: '913105',
    label: 'Mec\u00e2nico de manuten\u00e7\u00e3o de aparelhos de levantamento'
  },
  {
    value: '913115',
    label: 'Mec\u00e2nico de manuten\u00e7\u00e3o de m\u00e1quinas agr\u00edcolas'
  },
  {
    value: '913120',
    label: 'Mec\u00e2nico de manuten\u00e7\u00e3o de m\u00e1quinas de constru\u00e7\u00e3o e terraplenagem'
  },
  {
    value: '914105',
    label: 'Mec\u00e2nico de manuten\u00e7\u00e3o de aeronaves, em geral'
  },
  {
    value: '914110',
    label:
      'Mec\u00e2nico de manuten\u00e7\u00e3o de sistema hidr\u00e1ulico de aeronaves (servi\u00e7os de pista e hangar)'
  },
  {
    value: '914205',
    label: 'Mec\u00e2nico de manuten\u00e7\u00e3o de motores e equipamentos navais'
  },
  {
    value: '914305',
    label: 'Mec\u00e2nico de manuten\u00e7\u00e3o de ve\u00edculos ferrovi\u00e1rios'
  },
  {
    value: '914420',
    label: 'Mec\u00e2nico de manuten\u00e7\u00e3o de tratores'
  },
  {
    value: '914415',
    label: 'Mec\u00e2nico de manuten\u00e7\u00e3o de motocicletas'
  },
  {
    value: '914410',
    label: 'Mec\u00e2nico de manuten\u00e7\u00e3o de empilhadeiras e outros ve\u00edculos de cargas leves'
  },
  {
    value: '914425',
    label: 'Mec\u00e2nico de ve\u00edculos automotores a diesel (exceto tratores)'
  },
  {
    value: '914405',
    label: 'Mec\u00e2nico de manuten\u00e7\u00e3o de autom\u00f3veis, motocicletas e ve\u00edculos similares'
  },
  {
    value: '915110',
    label: 'T\u00e9cnico em manuten\u00e7\u00e3o de hidr\u00f4metros'
  },
  {
    value: '915105',
    label: 'T\u00e9cnico em manuten\u00e7\u00e3o de instrumentos de medi\u00e7\u00e3o e precis\u00e3o'
  },
  {
    value: '915115',
    label: 'T\u00e9cnico em manuten\u00e7\u00e3o de balan\u00e7as'
  },
  {
    value: '915205',
    label: 'Restaurador de instrumentos musicais (exceto cordas arcadas)'
  },
  {
    value: '915210',
    label: 'Reparador de instrumentos musicais'
  },
  {
    value: '915215',
    label: 'Luthier (restaura\u00e7\u00e3o de cordas arcadas)'
  },
  {
    value: '915305',
    label: 'T\u00e9cnico em manuten\u00e7\u00e3o de equipamentos e instrumentos m\u00e9dico-hospitalares'
  },
  {
    value: '915405',
    label: 'Reparador de equipamentos fotogr\u00e1ficos'
  },
  {
    value: '919105',
    label: 'Lubrificador industrial'
  },
  {
    value: '919115',
    label: 'Lubrificador de embarca\u00e7\u00f5es'
  },
  {
    value: '919110',
    label: 'Lubrificador de ve\u00edculos automotores (exceto embarca\u00e7\u00f5es)'
  },
  {
    value: '919205',
    label:
      'Mec\u00e2nico de manuten\u00e7\u00e3o de m\u00e1quinas cortadoras de grama, ro\u00e7adeiras, motosserras e similares'
  },
  {
    value: '919310',
    label: 'Mec\u00e2nico de manuten\u00e7\u00e3o de bicicletas e ve\u00edculos similares'
  },
  {
    value: '919305',
    label: 'Mec\u00e2nico de manuten\u00e7\u00e3o de aparelhos esportivos e de gin\u00e1stica'
  },
  {
    value: '919315',
    label: 'Montador de bicicletas'
  },
  {
    value: '950105',
    label: 'Supervisor de manuten\u00e7\u00e3o el\u00e9trica de alta tens\u00e3o industrial'
  },
  {
    value: '950110',
    label: 'Supervisor de manuten\u00e7\u00e3o eletromec\u00e2nica industrial, comercial e predial'
  },
  {
    value: '950205',
    label: 'Encarregado de manuten\u00e7\u00e3o el\u00e9trica de ve\u00edculos'
  },
  {
    value: '950305',
    label: 'Supervisor de manuten\u00e7\u00e3o eletromec\u00e2nica'
  },
  {
    value: '951105',
    label: 'Eletricista de manuten\u00e7\u00e3o eletroeletr\u00f4nica'
  },
  {
    value: '951315',
    label: 'Monitor de sistemas eletr\u00f4nicos de seguran\u00e7a interno'
  },
  {
    value: '951320',
    label: 'Monitor de sistemas eletr\u00f4nicos de seguran\u00e7a externo'
  },
  {
    value: '951310',
    label: 'Mantenedor de sistemas eletroeletr\u00f4nicos de seguran\u00e7a'
  },
  {
    value: '951305',
    label: 'Instalador de sistemas eletroeletr\u00f4nicos de seguran\u00e7a'
  },
  {
    value: '953105',
    label: 'Eletricista de instala\u00e7\u00f5es (aeronaves)'
  },
  {
    value: '953115',
    label:
      'Eletricista de instala\u00e7\u00f5es (ve\u00edculos automotores e m\u00e1quinas operatrizes, exceto aeronaves e embarca\u00e7\u00f5es)'
  },
  {
    value: '953110',
    label: 'Eletricista de instala\u00e7\u00f5es (embarca\u00e7\u00f5es)'
  },
  {
    value: '954105',
    label: 'Eletromec\u00e2nico de manuten\u00e7\u00e3o de elevadores'
  },
  {
    value: '954110',
    label: 'Eletromec\u00e2nico de manuten\u00e7\u00e3o de escadas rolantes'
  },
  {
    value: '954115',
    label: 'Eletromec\u00e2nico de manuten\u00e7\u00e3o de portas autom\u00e1ticas'
  },
  {
    value: '954120',
    label: 'Mec\u00e2nico de manuten\u00e7\u00e3o de instala\u00e7\u00f5es mec\u00e2nicas de edif\u00edcios'
  },
  {
    value: '954125',
    label: 'Operador eletromec\u00e2nico'
  },
  {
    value: '954205',
    label: 'Reparador de aparelhos eletrodom\u00e9sticos (exceto imagem e som)'
  },
  {
    value: '954210',
    label: 'Reparador de r\u00e1dio, tv e som'
  },
  {
    value: '954305',
    label: 'Reparador de equipamentos de escrit\u00f3rio'
  },
  {
    value: '991105',
    label: 'Conservador de via permanente (trilhos)'
  },
  {
    value: '991110',
    label: 'Inspetor de via permanente (trilhos)'
  },
  {
    value: '991115',
    label: 'Operador de m\u00e1quinas especiais em conserva\u00e7\u00e3o de via permanente (trilhos)'
  },
  {
    value: '991120',
    label: 'Soldador aluminot\u00e9rmico em conserva\u00e7\u00e3o de trilhos'
  },
  {
    value: '991205',
    label: 'Mantenedor de equipamentos de parques de divers\u00f5es e similares'
  },
  {
    value: '991305',
    label: 'Funileiro de ve\u00edculos (repara\u00e7\u00e3o)'
  },
  {
    value: '991310',
    label: 'Montador de ve\u00edculos (repara\u00e7\u00e3o)'
  },
  {
    value: '991315',
    label: 'Pintor de ve\u00edculos (repara\u00e7\u00e3o)'
  },
  {
    value: '992105',
    label: 'Alinhador de pneus'
  },
  {
    value: '992120',
    label: 'Lavador de pe\u00e7as'
  },
  {
    value: '992115',
    label: 'Borracheiro'
  },
  {
    value: '992110',
    label: 'Balanceador'
  },
  {
    value: '992205',
    label: 'Encarregado geral de opera\u00e7\u00f5es de conserva\u00e7\u00e3o de vias permanentes (exceto trilhos)'
  },
  {
    value: '992220',
    label: 'Pedreiro de conserva\u00e7\u00e3o de vias permanentes (exceto trilhos)'
  },
  {
    value: '992215',
    label: 'Operador de ceifadeira na conserva\u00e7\u00e3o de vias permanentes'
  },
  {
    value: '992210',
    label: 'Encarregado de equipe de conserva\u00e7\u00e3o de vias permanentes (exceto trilhos)'
  },
  {
    value: '992225',
    label: 'Auxiliar geral de conserva\u00e7\u00e3o de vias permanentes (exceto trilhos)'
  }
]

export const BRAZILIAN_STATES_OPTIONS: FieldOptions = [
  { label: 'Acre', value: 'AC' },
  { label: 'Alagoas', value: 'AL' },
  { label: 'Amazonas', value: 'AM' },
  { label: 'Amapá', value: 'AP' },
  { label: 'Bahia', value: 'BA' },
  { label: 'Ceará', value: 'CE' },
  { label: 'Distrito Federal', value: 'DF' },
  { label: 'Espírito Santo', value: 'ES' },
  { label: 'Goiás', value: 'GO' },
  { label: 'Maranhão', value: 'MA' },
  { label: 'Minas Gerais', value: 'MG' },
  { label: 'Mato Grosso do Sul', value: 'MS' },
  { label: 'Mato Grosso', value: 'MT' },
  { label: 'Pará', value: 'PA' },
  { label: 'Paraíba', value: 'PB' },
  { label: 'Pernambuco', value: 'PE' },
  { label: 'Piauí', value: 'PI' },
  { label: 'Paraná', value: 'PR' },
  { label: 'Rio de Janeiro', value: 'RJ' },
  { label: 'Rio Grande do Norte', value: 'RN' },
  { label: 'Rondônia', value: 'RO' },
  { label: 'Roraima', value: 'RR' },
  { label: 'Rio Grande do Sul', value: 'RS' },
  { label: 'Santa Catarina', value: 'SC' },
  { label: 'Sergipe', value: 'SE' },
  { label: 'São Paulo', value: 'SP' },
  { label: 'Tocantins', value: 'TO' }
]

export enum UserStatus {
  ANALYSING = '0',
  APPROVED = '1',
  REJECTED = '2'
}
export const USER_STATUS_OPTIONS: FieldOptions = [
  { value: UserStatus.ANALYSING, label: 'Em análise' },
  { value: UserStatus.APPROVED, label: 'Aprovado' },
  { value: UserStatus.REJECTED, label: 'Recusado' }
]
