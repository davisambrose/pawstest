/*
 * File: app/controller/Preceptors.js
 *
 * This file was generated by Sencha Architect version 3.0.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('pawu.controller.Preceptors', {
    extend: 'Ext.app.Controller',

    stores: [
        'PreceptorDataStore'
    ],
    views: [
        'PreceptorView',
        'PreceptorForm'
    ],

    refs: [
        {
            ref: 'PreceptorForm',
            selector: '#PreceptorViewForm',
            xtype: 'Ext.form.Panel'
        },
        {
            ref: 'preceptorHospital',
            selector: 'preceptorhospital'
        },
        {
            ref: 'preceptorView',
            selector: '#preceptorview'
        },
        {
            ref: 'disciplineModel',
            selector: 'DisciplineData'
        }
    ],

    onGridpanelSelectionChange: function(model, selected, eOpts) {
        if (selected.length <= 0) {
            this.getPreceptorForm().getForm().reset();
        					return;
        				}
        this.getPreceptorForm().getForm().loadRecord(selected[0]);
    },

    saveData: function(button, e, eOpts) {
        alert('test');
    },

    addDiscipline: function(button, e, eOpts) {
        alert('add new discipline button clicked');
    },

    addHospital: function(button, e, eOpts) {

        var view = Ext.widget('preceptorhospital');
        view.show();
    },

    precHospSave: function(button, e, eOpts) {
        alert('Submit button clicked');
    },

    onHospitalEdit: function(dataview, record, item, index, e, eOpts) {
         alert('Hospital Edit Clicked');
    },

    onDisciplineEdit: function(button, e, eOpts) {

        var win = button.up('window');
        var form = win.down('form');
        values = form.getValues();
       
        if (form.isValid()) {
            //create an AJAX request

            Ext.Ajax.request({
                url: '/pawu/preceptorws/disciplineupdate',
                method: 'POST',
                contentType: "application/json",

                jsonData: Ext.encode(form.getValues()),

                scope: this,
                //method to call when the request is successful
                success: this.onSaveSuccess,
                //method to call when the request is a failure
                failure: this.onSaveFailure
            });

            win.close();
        }

    },

    onSaveFailure: function(err) {
        Ext.MessageBox.alert('Error occured during Database Save');
    },

    onSaveSuccess: function(response, opts) {
        response = Ext.decode(response.responseText);
        if (response.success) {
            Ext.MessageBox.alert('Successful', response.message);

            var store2 = Ext.getStore('PreceptorDataStore');
            store2.load();

        } else {
            Ext.MessageBox.alert('Database update failed',
                response.message);
        }
    },

    init: function(application) {
        this.control({
            "gridpanel": {
                selectionchange: this.onGridpanelSelectionChange
            },
            "#mybutton": {
                click: this.saveData
            },
            "#mybutton3": {
                click: this.addDiscipline
            },
            "#mybutton4": {
                click: this.addHospital
            },
            "#mybutton5": {
                click: this.precHospSave
            },
            "#mygridview2": {
                itemdblclick: this.onHospitalEdit
            },
            "#mybutton6": {
                click: this.onDisciplineEdit
            }
        });
    }

});
