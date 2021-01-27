var Datos_Contratos = {
	usuario: "",
	id_contrato: "",
	modo_venta: "",
    Fecha_contrato: "",
    nro_contrato: "",
    score: "",
    clean: "",
    cliente: {
        nombre: "",
        app_paterno: "",
        app_materno: "",
        rut: "",
        dv: "",
        giro: "",
        direccion_comercial: "",
        fono_parti: "",
        fono_oficina: "",
        fono_celular: "",
        email: ""
    },
    cuenta: {
        boleta: "",
        envio: {
            electronico: "",
            fisico: ""
        },
        direccion_envio: {
            calle: "",
            numero: "",
            depto: "",
            telefono: ""
        },
        email: ""
    },
    instalacion: {
        contacto: "",
        telefono: {
            fono_contacto_uno: "",
            fono_contacto_dos: "",
            fono_celular: ""
        },
        region: "",
        Comuna: "",
        calle: "",
        numero: "",
        depto: "",
        email: ""        
    },
    Servicios: {
        television: {
            plan_base: "",
            decos_add: {
                sd_dta:{
                    cantidad: ""
                },
                hd_dta:{
                    cantidad: ""
                },
                sd:{
                    cantidad: ""
                },
                hd:{
                    cantidad: ""
                },
                hd_full:{
                    cantidad: ""
                }
            },
            canales_adicionales:{
                sd: {
                    cdf_premium: "",
                    venus: "",
                    pack_adulto: "",
                    hot_pack: "",
                    play_boy: ""
                },
                hd: {
                    cdf_premium_hd: "",
                    pack_fox_premium: "",
                    premium_fox_sports: "",
                    pack_hbo_max: ""
                }
            }
        },
        telefonia: {
            nuevo: "",
            portado: "",
            recuperado: "",
            plan: {
                cuenta_controlada: "",
                minutos_libres: ""
            },
            bolsa_minutos: {
                cuenta_controlada: "",
                minutos_libres: "",
                otros: ""
            },
            desbloquear: {
                servicio_800: "",
                servicio_600: "",
                servicio_700: "",
                ld_internacional: "",
                celulares: "",
                otros: ""
            },
            carrier: {
                claro_110: "",
                claro_155: "",
                claro_171: "",
                otro: ""
            },
            solicita_equipo: {
                si: "",
                no: ""
            }
        },
        internet: {
            plan:{
                mb_50: "",
                mb_200: "",
                mb_400: ""
            },
            adionales: {
                asistencia_pc: "",
                pack_mdfee: "",
                wifi_360_adicional: "",
                smart_home_kit_camara: "",
                wifi_360: ""
            }
        }
    },
    Contratacion: {
        nombre_plan_base: "",
        promocion: "",
        promocion_canal: "",
        ci_acred: "",
        ci_inst_total: "",
        pagado: "",
        efectivo: "",
        otros_costos: "",
        especificicar: "",
        valores_servicios: {
            precio_servicio: {
                television: "",
                telefonia: "",
                internet: ""
            },
            descuentos: {
                television: "",
                telefonia: "",
                internet: ""
            },
            total_servicios: {
                television: "",
                telefonia: "",
                internet: ""
            }
        },
        total_plan_base: "",
        arriendo_equipo: "",
        otros_add: "",
        total_base_mensual: "",
        credito: "",
        excepcion: "",  
        observaciones: ""   
    },
    observaciones: "",
    firmantes: {
        nom_uno: "",
        rut_uno: "",
        dv_uno: "",
        nom_dos: "",
        rut_dos: "",
        dv_dos: ""
    }
    
}