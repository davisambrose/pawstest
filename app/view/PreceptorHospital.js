/*
 * File: app/view/PreceptorHospital.js
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

Ext.define('pawu.view.PreceptorHospital', {
    extend: 'Ext.window.Window',
    alias: 'widget.preceptorhospital',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.button.Button'
    ],

    height: 250,
    width: 562,
    title: 'My Window',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    bodyPadding: 10,
                    title: 'My Form',
                    items: [
                        {
                            xtype: 'combobox',
                            width: 532,
                            fieldLabel: 'Hospital',
                            name: 'id',
                            allowBlank: false,
                            displayField: 'name',
                            queryMode: 'local',
                            store: 'HospitalComboStore',
                            valueField: 'id'
                        },
                        {
                            xtype: 'button',
                            itemId: 'mybutton5',
                            text: 'Submit'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Preceptor',
                            name: 'pid'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});