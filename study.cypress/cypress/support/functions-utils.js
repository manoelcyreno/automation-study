const { allure } = require('allure-cypress')

function addAllureLabelsFromTags(tags) {
    if (Array.isArray(tags)) {
        tags.forEach((tag) => {
            switch (tag) {
                case '@blocker':
                    allure.label('severity', 'blocker')
                    break
                case '@critical':
                    allure.label('severity', 'critical')
                    break
                case '@high':
                    allure.label('severity', 'high')
                    break
                case '@medium':
                    allure.label('severity', 'medium')
                    break
                case '@low':
                    allure.label('severity', 'low')
                    break
                default:
                    allure.label('severity', 'low')
                    break
            }
        })
    }
}

Cypress.Commands.add('addAllureLabelsFromTags', addAllureLabelsFromTags)
